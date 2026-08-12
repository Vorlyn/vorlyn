import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import babelPlugin from "@rolldown/plugin-babel";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babelPlugin({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  build: {
    minify: "oxc",
    sourcemap: false,
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: "vendor",
              test: /[\\/]node_modules[\\/](react-router-dom|@tanstack\/react-query|@tanstack\/react-table|date-fns)[\\/]/,
              priority: 10,
            },
            {
              name: "ui-frameworks",
              test: /[\\/]node_modules[\\/]@base-ui\/react[\\/]/,
              priority: 10,
            },
          ],
        },
      },
    },
  },
});
