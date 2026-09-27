function SponsorsSection() {
  return (
    <div className="mt-40 flex w-full flex-col items-center justify-center gap-20 px-4 md:flex-row lg:hidden">
      <div className="flex flex-col gap-8">
        <p className="text-center text-xs text-black md:text-left">
          SPONSORED BY
        </p>
        <div className="flex items-center gap-8">
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
      <div className="flex flex-col gap-8">
        <p className="text-center text-xs text-black md:text-left">HOSTED BY</p>
        <div className="flex items-center gap-8">
          <img
            src="/images/common/iit-bombay-logo.webp"
            alt="IIT Bombay"
            width={212}
            height={208}
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
  );
}

export { SponsorsSection };
