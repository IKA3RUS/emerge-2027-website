import path from "path";

import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import { cloudflare } from "@cloudflare/vite-plugin";
import contentCollections from "@content-collections/vite";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

const config = defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    tsconfigPaths: true,
  },
  plugins: [
    devtools(),
    tailwindcss(),
    svgr(),
    tanstackStart(),
    viteReact(),
    contentCollections(),
    cloudflare({
      viteEnvironment: {
        name: "ssr",
      },
    }),
  ],
});

export default config;
