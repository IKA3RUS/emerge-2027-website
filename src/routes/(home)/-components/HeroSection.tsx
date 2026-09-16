import { useState } from "react";

import { Link } from "@tanstack/react-router";

import {
  BarShift,
  DotGrid,
  Heatmap,
  ObjectTracker,
  PixelThrow,
  Shader,
} from "shaders/react";

import { Button } from "@/components/primitives/Button";

import ArrowOutwardIcon from "@material-symbols/svg-700/sharp/arrow_outward-fill.svg?react";

import logoSdfUrl from "@/assets/common/emerge-2027-logo.bin?url";

function HeroSection() {
  const [shaderReady, setShaderReady] = useState(false);

  return (
    <div className="relative h-[calc(100dvh-1rem)] bg-black sm:h-[calc(100dvh-6.75rem)]">
      <Shader
        className="absolute inset-0 size-full opacity-0 transition-opacity data-ready:opacity-100"
        onReady={() => setShaderReady(true)}
        data-ready={shaderReady}
      >
        <Heatmap
          shapeSdfUrl={logoSdfUrl}
          stops={[
            { color: "#0A0A26AA", position: 0 },
            { color: "#1E1EE9AA", position: 0.2 },
            { color: "#1E1EE9", position: 0.45 },
            { color: "#E8632B", position: 0.7 },
            { color: "#F9E25F", position: 0.9 },
            { color: "#FFFFFF", position: 1 },
          ]}
          center={{
            type: "mouse-position",
            smoothing: 0.5,
            reach: 0.1,
            originX: 0.8,
            originY: 0.5,
          }}
          shape={JSON.stringify({
            type: "svgExtrude3D",
            depth: 0.3,
            bevel: 0.05,
            rotX: {
              type: "mouse",
              axis: "y",
              outputMin: 30,
              outputMax: -30,
              smoothing: 0.5,
            },
            rotY: 35,
          })}
          scale={0.95}
          contour={0.25}
          angle={270}
          speed={0.35}
          outerGlow={0.3}
          innerGlow={0.4}
        />
        <PixelThrow strength={0.05} radius={0.3} />
        <BarShift angle={17} edges="stretch" count={10} intensity={-0.05} />
        <ObjectTracker
          detectionMode="red"
          threshold={0.9}
          cellSize={800}
          labelBackgroundColor="transparent"
          labelColor="transparent"
        />
        <DotGrid
          density={35}
          dotSize={0.1}
          speedVariance={0.25}
          twinkle={1}
          opacity={0.2}
        />
      </Shader>
      <div className="absolute inset-0 z-1 mx-auto flex size-full max-w-[1920px] flex-col items-center p-4 transition-[padding] lg:items-start lg:p-12">
        <div className="flex gap-16 max-lg:hidden">
          <div className="flex flex-col gap-8">
            <p className="text-xs text-slate-300">SPONSORED BY</p>
            <div className="flex items-center gap-4">
              <img
                src="/images/common/myas-logo-dark.png"
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
            <p className="text-xs text-slate-300">HOSTED BY</p>
            <div className="flex items-center gap-6">
              <img
                src="/images/common/iit-bombay-logo-dark.png"
                alt="IIT Bombay"
                className="h-13"
              />
              <img
                src="/images/common/idc-logo-dark.png"
                alt="IDC School of Design"
                className="h-6"
              />
            </div>
          </div>
        </div>

        <div className="flex h-full flex-col items-center justify-center gap-12 lg:items-start">
          <img
            src="/images/common/emerge-2027-logo-monochrome-dark.png"
            className="z-1 max-h-[20vh] drop-shadow-2xl drop-shadow-black transition-[height,drop-shadow] md:h-30 lg:h-40 xl:h-50 2xl:h-65"
          />
          <p className="text-center text-slate-300 drop-shadow-xs drop-shadow-black">
            Conference • 26-27 Feb 2027 • IDC School of Design, IIT Bombay
          </p>
        </div>

        <div className="flex flex-col gap-2 lg:flex-row">
          <Button nativeButton={false} render={<Link to="/submissions" />}>
            Explore Tracks & Submit Paper
          </Button>
          <Button
            disabled
            className="disabled:bg-slate-900 disabled:text-slate-700"
          >
            Register
            <div className="bg-slate-800 px-1 text-slate-600">Opens 16 Dec</div>
            <ArrowOutwardIcon className="size-4 fill-slate-700" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export { HeroSection };
