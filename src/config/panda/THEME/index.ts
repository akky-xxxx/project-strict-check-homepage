import { KEYFRAMES } from "./constants/KEYFRAMES"
import { SEMANTIC_TOKEN_COLORS } from "./constants/SEMANTIC_TOKEN_COLORS"
import { SEMANTIC_TOKEN_FONT_SIZES } from "./constants/SEMANTIC_TOKEN_FONT_SIZES"
import { SEMANTIC_TOKEN_FONT_WEIGHTS } from "./constants/SEMANTIC_TOKEN_FONT_WEIGHTS"
import { TOKEN_COLORS } from "./constants/TOKEN_COLORS"
import { TOKEN_FONT_SIZES } from "./constants/TOKEN_FONT_SIZES"
import { TOKEN_FONT_WEIGHTS } from "./constants/TOKEN_FONT_WEIGHTS"

import type { Config } from "@pandacss/dev"

export const THEME = {
  tokens: {
    colors: TOKEN_COLORS,
    fontSizes: TOKEN_FONT_SIZES,
    fontWeights: TOKEN_FONT_WEIGHTS,
  },

  semanticTokens: {
    colors: SEMANTIC_TOKEN_COLORS,
    fontSizes: SEMANTIC_TOKEN_FONT_SIZES,
    fontWeights: SEMANTIC_TOKEN_FONT_WEIGHTS,
  },

  extend: {
    keyframes: KEYFRAMES,
  },
} as const satisfies Config["theme"]
