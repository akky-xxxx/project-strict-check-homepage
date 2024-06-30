import { SEMANTIC_TOKEN_COLORS } from "./constants/SEMANTIC_TOKEN_COLORS"
import { TOKEN_COLORS } from "./constants/TOKEN_COLORS"

import type { Config } from "@pandacss/dev"

export const THEME = {
  tokens: {
    colors: TOKEN_COLORS,
  },

  semanticTokens: {
    colors: SEMANTIC_TOKEN_COLORS,
  },
} as const satisfies Config["theme"]
