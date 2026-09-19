import { cn } from "@/lib/cn";

function Footer({ className }: { className?: string }) {
  return (
    <div className={cn("mt-2", className)}>
      <div className="w-full bg-slate-200 p-4 lg:p-12">
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
      <div className="flex w-full flex-col items-center justify-center gap-16 bg-slate-300 p-12 md:flex-row">
        <div className="flex flex-col items-center gap-8 md:items-start">
          <p className="text-xs text-black">SPONSORED BY</p>
          <div className="flex items-center gap-4">
            <img
              src="/images/common/myas-logo.png"
              alt="Ministry of Youth Affairs and Sports"
              className="h-12"
            />
            <img
              src="/images/common/my-bharat-logo.png"
              alt="My Bharat"
              className="h-12"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-8 md:items-start">
          <p className="text-xs text-black">HOSTED BY</p>
          <div className="flex items-center gap-6">
            <img
              src="/images/common/iit-bombay-logo.png"
              alt="IIT Bombay"
              className="h-13"
            />
            <img
              src="/images/common/idc-logo.png"
              alt="IDC School of Design"
              className="h-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Footer };
