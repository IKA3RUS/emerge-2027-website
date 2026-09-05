import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import contentCollections from "@content-collections/vite";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    tailwindcss(),
    svgr(),
    tanstackStart(),
    viteReact(),
    contentCollections(),
  ],
});

export default config;
