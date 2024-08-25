import { type UserConfig, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react() as UserConfig["plugins"]],
  test: {
    environment: "jsdom",
  },
});
