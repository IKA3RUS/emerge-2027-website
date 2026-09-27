import { cn } from "@/lib/cn";

function Footer({ className }: { className?: string }) {
  return (
    <div className={cn("mt-2", className)}>
      <div className="w-full bg-slate-200 p-4 lg:p-12">
        <div className="mx-auto flex max-w-[1920px] flex-col items-center justify-between gap-4 lg:items-end">
          <img
            src="/images/common/emerge-2027-logo-monochrome.webp"
            alt="Emerge 2027"
            width={2127}
            height={612}
            className="h-auto w-full"
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
              src="/images/common/myas-logo.webp"
              alt="Ministry of Youth Affairs and Sports"
              width={197}
              height={100}
              className="h-12 w-auto"
            />
            <img
              src="/images/common/my-bharat-logo.webp"
              alt="My Bharat"
              width={384}
              height={160}
              className="h-12 w-auto"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-8 md:items-start">
          <p className="text-xs text-black">HOSTED BY</p>
          <div className="flex items-center gap-6">
            <img
              src="/images/common/iit-bombay-logo.webp"
              alt="IIT Bombay"
              width={102}
              height={100}
              className="h-13 w-auto"
            />
            <img
              src="/images/common/idc-logo.webp"
              alt="IDC School of Design"
              width={589}
              height={100}
              className="h-6 w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Footer };
