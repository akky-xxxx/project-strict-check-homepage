import type { Tokens } from "@pandacss/dev"

export const TOKEN_FONT_SIZES = {
  SIZE_14: { value: "calc(14 / var(--root-font-size) * 1rem)" },
  SIZE_16: { value: "calc(16 / var(--root-font-size) * 1rem)" },
  SIZE_18: { value: "calc(18 / var(--root-font-size) * 1rem)" },
  SIZE_20: { value: "calc(20 / var(--root-font-size) * 1rem)" },
  SIZE_22: { value: "calc(22 / var(--root-font-size) * 1rem)" },
  SIZE_24: { value: "calc(24 / var(--root-font-size) * 1rem)" },
  SIZE_28: { value: "calc(28 / var(--root-font-size) * 1rem)" },
  SIZE_32: { value: "calc(32 / var(--root-font-size) * 1rem)" },
} as const satisfies Tokens["fontSizes"]
