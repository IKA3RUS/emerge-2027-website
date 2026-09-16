import { useEffect, useState } from "react";
import type { RefObject } from "react";

import {
  animate,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import type { Contact } from "@/data/contacts";

import CallIcon from "@material-symbols/svg-700/sharp/call-fill.svg?react";
import MailIcon from "@material-symbols/svg-700/sharp/mail-fill.svg?react";

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

interface ContactCardProps extends Contact {
  dragConstraints: RefObject<HTMLDivElement | null>;
}

function ContactCard({
  name,
  phone,
  email,
  dragConstraints,
}: ContactCardProps) {
  const [target] = useState(() => randomInt(-15, 15));
  const [isDragging, setIsDragging] = useState(false);

  const x = useMotionValue(0);
  const baseRotate = useMotionValue(0);
  const rawRotate = useTransform(
    [x, baseRotate],
    ([latestX, latestBase]) =>
      (latestBase as number) + clamp((latestX as number) * 0.06, -25, 25),
  );
  // Rotation gets its own rotational inertia instead of rigidly tracking x,
  // so the card lags/settles like it has weight rather than snapping to position.
  const rotate = useSpring(rawRotate, {
    stiffness: 260,
    damping: 18,
    mass: 0.6,
  });

  useEffect(() => {
    const controls = animate(baseRotate, target, {
      duration: 0.2,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [baseRotate, target]);

  return (
    <motion.div
      drag
      dragElastic={0.01}
      dragMomentum
      dragTransition={{ power: 0.3, timeConstant: 120, restDelta: 0.5 }}
      dragConstraints={dragConstraints}
      style={{ x, rotate, cursor: isDragging ? "grabbing" : "grab" }}
      onDragStart={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragEnd={() => setIsDragging(false)}
      className="z-100 flex w-80 flex-col gap-4 bg-emerge-blue p-8 shadow-sm ring-1 shadow-slate-900/50 ring-blue-800/50 ring-offset-[-1] transition-[width,padding] select-none xl:w-140 xl:gap-8 xl:p-20"
    >
      <div className="text-xl font-medium text-white lowercase transition-[font-size] xl:text-2xl">
        {name}
      </div>
      <div className="flex flex-col items-start gap-0">
        <a href={`tel:${phone}`} className="flex items-center gap-2">
          <CallIcon className="size-4 fill-white" />
          <span className="text-amber-400">{phone}</span>
        </a>
        <a href={`mailto:${email}`} className="flex items-center gap-2">
          <MailIcon className="size-4 fill-white" />
          <span className="text-amber-400">{email}</span>
        </a>
      </div>

      <div className="flex items-center gap-4">
        <img
          src="/images/common/iit-bombay-logo-dark.png"
          alt="IIT Bombay"
          className="h-9"
          draggable={false}
        />
        <img
          src="/images/common/idc-logo-dark.png"
          alt="IDC School of Design"
          className="h-4"
          draggable={false}
        />
      </div>
    </motion.div>
  );
}

export { ContactCard };
