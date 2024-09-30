import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: ["./vitest.setup.js"],
    reporters: [
      "default",
      ["allure-vitest/reporter", { resultsDir: "./out/allure-results" }],
    ],
  },
});