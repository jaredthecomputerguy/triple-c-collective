import path from "path";

import react from "@vitejs/plugin-react";
import { ViteUserConfig, defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react() as ViteUserConfig["plugins"]],
  test: {
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, ""),
    },
  },
});
