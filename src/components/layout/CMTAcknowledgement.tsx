function CMTAcknowledgement() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-20 bg-black p-4 md:flex-row lg:px-12 lg:py-8">
      <p className="text-xs text-slate-500">
        The Microsoft CMT service was used for managing the peer-reviewing
        process for this conference. This service was provided for free by
        Microsoft and they bore all expenses, including costs for Azure cloud
        services as well as for software development and support.
      </p>
    </div>
  );
}

export { CMTAcknowledgement };
