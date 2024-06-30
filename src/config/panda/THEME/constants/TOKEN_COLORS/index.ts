import type { Tokens } from "@pandacss/dev"

export const TOKEN_COLORS = {
  /* eslint-disable @typescript-eslint/naming-convention */
  BLACK: {
    100: { value: "#333" },
    200: { value: "#222" },
    300: { value: "#111" },
  },
  WHITE: {
    100: { value: "#eee" },
    200: { value: "#ddd" },
    300: { value: "#ccc" },
  },

  BLUE: {
    100: { value: "#99f" },
    200: { value: "#11f" },
  },

  ACCENT: {
    100: { value: "#afa" },
    200: { value: "#1b1" },
  },
  HIGHLIGHT: {
    100: { value: "#040" },
    200: { value: "#efe" },
  },
  /* eslint-enable @typescript-eslint/naming-convention */
} as const satisfies Tokens["colors"]
