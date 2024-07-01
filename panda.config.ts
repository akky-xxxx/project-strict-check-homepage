import { defineConfig } from "@pandacss/dev"

import { THEME } from "./src/config/panda/THEME"

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: THEME,

  minify: process.env.NODE_ENV === "production",

  // The output directory for your css system
  outdir: "styled-system",

  conditions: {
    dark: "[data-theme=dark] &",
    light: "[data-theme=light] &",

    extend: {
      hasFocus: ":has(:focus) &",
    },
  },
})
