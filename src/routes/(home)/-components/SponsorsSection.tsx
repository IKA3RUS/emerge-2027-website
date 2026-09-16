function SponsorsSection() {
  return (
    <div className="mt-40 flex w-full flex-col items-center justify-center gap-20 px-4 md:flex-row lg:hidden">
      <div className="flex flex-col gap-8">
        <p className="text-center text-xs text-black md:text-left">
          SPONSORED BY
        </p>
        <div className="flex items-center gap-8">
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
      <div className="flex flex-col gap-8">
        <p className="text-center text-xs text-black md:text-left">HOSTED BY</p>
        <div className="flex items-center gap-8">
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
  );
}

export { SponsorsSection };
