function ThemeSection() {
  return (
    <div
      id="theme"
      className="relative mt-40 flex h-fit scroll-mt-25 justify-between bg-amber-400 p-4 text-white lg:p-12"
    >
      <div className="flex w-full flex-col gap-2">
        <h2 className="text-sm text-emerge-blue select-none">THEME</h2>

        <div className="flex flex-col gap-1 lg:flex-row">
          <div className="w-full bg-emerge-blue p-12 text-7xl font-light selection:bg-amber-400 selection:text-emerge-blue lg:w-min">
            product design for a changing world
          </div>

          <div className="flex h-full w-full items-end border-t p-12 text-slate-800">
            <p className="max-w-150 selection:bg-emerge-blue selection:text-white">
              Product design today is undergoing a rapid and often unpredictable
              transformation driven by advances in digital and computational
              technologies, growing sustainability and regulatory demands,
              evolving user expectations, and shifting socio-economic and
              cultural contexts. This theme invites researchers and
              practitioners to examine how product design can respond to these
              transformations without losing sight of its core commitments to
              functionality, usability, desirability, and human wellbeing. It
              welcomes work that investigates the changing relationship between
              designers, technology, and users. Emerge 2027 seeks to bring
              together diverse perspectives on how the discipline of product
              design must adapt and what it must hold onto, as it navigates a{" "}
              <mark className="bg-emerge-blue px-1 text-white">
                changing world
              </mark>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ThemeSection };
