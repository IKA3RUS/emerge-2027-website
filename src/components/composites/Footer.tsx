import { cn } from "@/lib/cn";

function Footer({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "mt-60 flex flex-col items-center justify-between gap-4 bg-slate-200 p-4 lg:items-end lg:p-12",
        className,
      )}
    >
      <img
        src="/images/common/emerge-2027-logo-monochrome.png"
        className="w-full"
      />
      <p className="text-sm text-emerge-blue uppercase select-none">
        © 2026-27. All Rights Reserved.
      </p>
    </div>
  );
}

export { Footer };
