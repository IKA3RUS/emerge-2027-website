import { cn } from "@/lib/cn";

function Footer({ className }: { className?: string }) {
  return (
    <div className={cn("mt-60 bg-slate-200 p-4 lg:p-12", className)}>
      <div className="mx-auto flex max-w-[1920px] flex-col items-center justify-between gap-4 lg:items-end">
        <img
          src="/images/common/emerge-2027-logo-monochrome.png"
          className="w-full"
        />
        <p className="text-sm text-emerge-blue uppercase select-none">
          © 2026-27. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export { Footer };
