import astroConfig from "eslint-plugin-astro";

import baseConfig from "@beamer/eslint-config/base";

/** @type {import("typescript-eslint").Config} */
export default [
  { ignores: [] },
  ...baseConfig,
  ...astroConfig.configs.recommended,
];
