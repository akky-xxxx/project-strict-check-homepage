import type { Tokens } from "@pandacss/dev"

export const TOKEN_FONT_WEIGHTS = {
  NORMAL: { value: 300 },

  BOLD: { value: 700 },
} as const satisfies Tokens["fontWeights"]
