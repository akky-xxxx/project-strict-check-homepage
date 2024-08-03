import type { Tokens } from "@pandacss/dev"

export const TOKEN_COLORS = {
  /* eslint-disable @typescript-eslint/naming-convention */
  BLACK: {
    100: { value: "#1c1d1c" },
    200: { value: "#161716" },
    300: { value: "#060706" },
  },
  WHITE: {
    100: { value: "#fcfdfc" },
    200: { value: "#f8f9f8" },
    300: { value: "#e8e9e8" },
  },

  BLUE: {
    100: { value: "#99f" },
    200: { value: "#11f" },
  },

  ACCENT: {
    100: { value: "#afa" },
    200: { value: "#171" },
  },
  HIGHLIGHT: {
    100: { value: "#030" },
    200: { value: "#dfd" },
  },
  /* eslint-enable @typescript-eslint/naming-convention */
} as const satisfies Tokens["colors"]
