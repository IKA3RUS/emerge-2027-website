import {
  BarShift,
  DotGrid,
  Heatmap,
  ObjectTracker,
  PixelThrow,
  Shader,
} from "shaders/react";

import logoSdfUrl from "@/assets/common/emerge-2027-logo.bin?url";

function HeroShaderBackground({
  onReady,
  ready,
}: {
  onReady: () => void;
  ready: boolean;
}) {
  return (
    <Shader
      className="absolute inset-0 size-full opacity-0 transition-opacity data-ready:opacity-100"
      onReady={onReady}
      data-ready={ready}
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
  );
}

export default HeroShaderBackground;
