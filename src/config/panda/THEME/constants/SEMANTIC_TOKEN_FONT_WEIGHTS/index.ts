import type { SemanticTokens } from "@pandacss/dev"

export const SEMANTIC_TOKEN_FONT_WEIGHTS = {
  fontWeight: {
    DEFAULT: { value: "{fontWeights.NORMAL}" },

    bold: { value: "{fontWeights.BOLD}" },
  },
} as const satisfies SemanticTokens["fontWeights"]
