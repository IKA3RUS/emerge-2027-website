import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { schedule } from "#/data/schedule";
import type { ScheduleEvent } from "#/data/schedule";

const CONFERENCE_TZ = "Asia/Kolkata";
const conferenceDateFormat = new Intl.DateTimeFormat("en-IN", {
  timeZone: CONFERENCE_TZ,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});
const DATE_ROLLOVER_CHECK_MS = 60_000;

function todayInConferenceTz(): Date {
  const parts: Record<string, string> = {};
  for (const { type, value } of conferenceDateFormat.formatToParts(
    new Date(),
  )) {
    parts[type] = value;
  }
  return new Date(`${parts.year}-${parts.month}-${parts.day}T00:00:00`);
}

function groupItemsByYear(
  items: ScheduleEvent[],
): { year: number; items: ScheduleEvent[] }[] {
  const groups: { year: number; items: ScheduleEvent[] }[] = [];
  for (const item of items) {
    const year = new Date(item.date).getFullYear();
    const lastGroup = groups.at(-1);
    if (lastGroup?.year === year) {
      lastGroup.items.push(item);
    } else {
      groups.push({ year, items: [item] });
    }
  }
  return groups;
}

function getSurroundingItems(
  items: ScheduleEvent[],
  today: Date,
): { prev?: ScheduleEvent; next?: ScheduleEvent } {
  let prev: ScheduleEvent | undefined;
  for (const item of items) {
    if (new Date(item.date) < today) {
      prev = item;
    } else {
      return { prev, next: item };
    }
  }
  return { prev, next: undefined };
}

const scheduleByYear = groupItemsByYear(schedule);

function TodayMarker({ top }: { top: number | null }) {
  if (top === null) return null;

  return (
    <div
      style={{ top }}
      className="absolute -left-32 flex w-24 items-start justify-end max-lg:hidden"
    >
      <span className="bg-amber-400 px-2 py-1 text-sm text-black">TODAY</span>
      <span className="bg-emerge-yellow h-0.5 w-4" />
    </div>
  );
}

interface ScheduleItemProps {
  item: ScheduleEvent;
  current: boolean;
  registerRef: (id: string, el: HTMLLIElement | null) => void;
}

function ScheduleItem({ item, current, registerRef }: ScheduleItemProps) {
  const variant = current ? "current" : item.featured ? "featured" : "default";
  const date = new Date(item.date);
  const day = String(date.getDate()).padStart(2, "0");
  const month = date
    .toLocaleDateString("en-US", { month: "short" })
    .toUpperCase();

  const ref = useCallback(
    (el: HTMLLIElement | null) => registerRef(item.id, el),
    [item.id, registerRef],
  );

  return (
    <li ref={ref} className="flex gap-1">
      <time
        dateTime={item.date}
        className="w-30 border-t border-slate-200 text-sm text-black"
      >
        {day} {month}
      </time>
      <div
        data-variant={variant}
        className="flex-1 rounded-full px-6 py-4 data-[variant=current]:rounded-none data-[variant=current]:bg-black data-[variant=current]:font-medium data-[variant=current]:text-white data-[variant=default]:bg-gray-100 data-[variant=default]:font-medium data-[variant=default]:text-black data-[variant=featured]:bg-emerge-blue data-[variant=featured]:text-white"
      >
        {item.name}
      </div>
    </li>
  );
}

export function ScheduleSection() {
  const [today, setToday] = useState(todayInConferenceTz);
  const { prev: prevItem, next: currentItem } = useMemo(
    () => getSurroundingItems(schedule, today),
    [today],
  );

  // Re-seed across midnight in the conference timezone.
  useEffect(() => {
    const interval = setInterval(() => {
      setToday((current) => {
        const next = todayInConferenceTz();
        // Preserve the reference when unchanged; otherwise the layout effect
        // re-runs and re-measures every tick.
        return next.getTime() === current.getTime() ? current : next;
      });
    }, DATE_ROLLOVER_CHECK_MS);
    return () => clearInterval(interval);
  }, []);

  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef(new Map<string, HTMLLIElement>());
  const [markerTop, setMarkerTop] = useState<number | null>(null);

  const registerItemRef = useCallback(
    (id: string, el: HTMLLIElement | null) => {
      if (el) {
        itemRefs.current.set(id, el);
      } else {
        itemRefs.current.delete(id);
      }
    },
    [],
  );

  useLayoutEffect(() => {
    function updateMarkerPosition() {
      const container = listRef.current;
      if (!container || !currentItem) {
        setMarkerTop(null);
        return;
      }

      const nextEl = itemRefs.current.get(currentItem.id);
      if (!nextEl) {
        setMarkerTop(null);
        return;
      }

      const containerTop = container.getBoundingClientRect().top;
      const nextRect = nextEl.getBoundingClientRect();
      const nextTop = nextRect.top - containerTop;

      const prevEl = prevItem ? itemRefs.current.get(prevItem.id) : undefined;
      if (!prevItem || !prevEl) {
        setMarkerTop(nextTop);
        return;
      }

      const prevRect = prevEl.getBoundingClientRect();
      const prevTop = prevRect.top - containerTop;

      const prevTime = new Date(prevItem.date).getTime();
      const currentTime = new Date(currentItem.date).getTime();
      const fraction = (today.getTime() - prevTime) / (currentTime - prevTime);

      setMarkerTop(prevTop + fraction * (nextTop - prevTop));
    }

    let frame = 0;
    function scheduleUpdate() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateMarkerPosition);
    }

    updateMarkerPosition();
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [currentItem, prevItem, today]);

  return (
    <div
      id="schedule"
      className="mx-auto mt-40 flex max-w-150 scroll-mt-25 flex-col gap-px px-4"
    >
      <div className="relative">
        <TodayMarker top={markerTop} />
        <div ref={listRef} className="flex flex-col gap-8">
          <h2 className="sr-only text-emerge-blue">SCHEDULE</h2>

          {scheduleByYear.map((group) => (
            <section key={group.year}>
              <h3 className="mb-3 inline-block bg-gray-100 px-3 py-2 font-medium">
                {group.year}
              </h3>
              <ul className="flex flex-col gap-px">
                {group.items.map((item) => (
                  <ScheduleItem
                    key={item.id}
                    item={item}
                    current={item === currentItem}
                    registerRef={registerItemRef}
                  />
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
