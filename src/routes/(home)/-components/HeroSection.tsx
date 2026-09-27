import { lazy, Suspense, useEffect, useState } from "react";

import { Link } from "@tanstack/react-router";

import { Button } from "@/components/primitives/Button";

import ArrowOutwardIcon from "@material-symbols/svg-700/sharp/arrow_outward-fill.svg?react";

const HeroShaderBackground = lazy(() => import("./HeroShaderBackground"));

function HeroSection() {
  const [shaderReady, setShaderReady] = useState(false);
  const [loadShader, setLoadShader] = useState(false);

  useEffect(() => {
    if (typeof requestIdleCallback === "function") {
      const id = requestIdleCallback(() => setLoadShader(true), {
        timeout: 2000,
      });
      return () => cancelIdleCallback(id);
    }

    const id = setTimeout(() => setLoadShader(true), 200);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="relative h-[calc(100dvh-1rem)] bg-black sm:h-[calc(100dvh-6.75rem)]">
      {loadShader && (
        <Suspense fallback={null}>
          <HeroShaderBackground
            onReady={() => setShaderReady(true)}
            ready={shaderReady}
          />
        </Suspense>
      )}
      <div className="absolute inset-0 z-1 mx-auto flex size-full max-w-[1920px] flex-col items-center p-4 transition-[padding] lg:items-start lg:p-12">
        <div className="flex gap-16 max-lg:hidden">
          <div className="flex flex-col gap-8">
            <p className="text-xs text-slate-300">SPONSORED BY</p>
            <div className="flex items-center gap-4">
              <img
                src="/images/common/myas-logo-dark.webp"
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
            <p className="text-xs text-slate-300">HOSTED BY</p>
            <div className="flex items-center gap-6">
              <img
                src="/images/common/iit-bombay-logo-dark.webp"
                alt="IIT Bombay"
                width={102}
                height={100}
                className="h-13 w-auto"
              />
              <img
                src="/images/common/idc-logo-dark.webp"
                alt="IDC School of Design"
                width={589}
                height={100}
                className="h-6 w-auto"
              />
            </div>
          </div>
        </div>

        <div className="flex h-full flex-col items-center justify-center gap-12 lg:items-start">
          <img
            src="/images/common/emerge-2027-logo-monochrome-dark.webp"
            alt="Emerge 2027"
            width={2127}
            height={612}
            fetchPriority="high"
            className="z-1 h-auto max-h-[20vh] w-auto drop-shadow-2xl drop-shadow-black transition-[height,drop-shadow] md:h-30 lg:h-40 xl:h-50 2xl:h-65"
          />
          <div className="flex flex-col gap-4 lg:items-start">
            <p className="text-center text-slate-500 drop-shadow-xs drop-shadow-black">
              Conference • Emerging Design Inquiry
            </p>
            <p className="text-center text-slate-300 drop-shadow-xs drop-shadow-black">
              26-27 Feb 2027 • IDC School of Design, IIT Bombay
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 lg:flex-row">
          <Button nativeButton={false} render={<Link to="/call-for-papers" />}>
            View Call For Papers
          </Button>
          <Button
            variant="secondary"
            nativeButton={false}
            render={
              <a
                href="https://cmt3.research.microsoft.com/EMERGE2027"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Submit Paper
            <ArrowOutwardIcon className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export { HeroSection };
