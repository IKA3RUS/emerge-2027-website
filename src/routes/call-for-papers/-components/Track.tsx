import type { PropsWithChildren } from "react";

type TrackProps = PropsWithChildren<{
  name: string;
  chair: string;
}>;

function Track({ name, chair, children }: TrackProps) {
  return (
    <div className="flex justify-between bg-slate-100 p-4 lg:p-12">
      <div className="mx-auto flex w-full max-w-200 flex-col gap-4">
        <h2 className="font-medium text-emerge-blue select-none">TRACK</h2>

        <div className="flex w-full flex-col gap-4 bg-emerge-blue p-12 selection:bg-white selection:text-emerge-blue">
          <p className="text-5xl leading-tight font-light text-white lowercase md:text-7xl">
            {name}
          </p>
          <p className="flex flex-col">
            <span className="text-sm text-white/50 uppercase">Track Chair</span>
            <span className="font-medium text-white">{chair}</span>
          </p>
        </div>

        <div className="flex h-full w-full items-end p-12">
          <div className="flex flex-col gap-4 selection:bg-emerge-blue selection:text-white [&_li]:marker:text-emerge-blue [&_strong]:bg-emerge-blue [&_strong]:px-1 [&_strong]:font-normal [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-1 [&_ul]:pl-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Track };
