import type { SemanticTokens } from "@pandacss/dev"

export const SEMANTIC_TOKEN_FONT_SIZES = {
  fontSize: {
    DEFAULT: { value: "{fontSizes.SIZE_16}" },

    lg: { value: "{fontSizes.SIZE_20}" },
    sm: { value: "{fontSizes.SIZE_14}" },
    xl: { value: "{fontSizes.SIZE_22}" },
  },
} as const satisfies SemanticTokens["fontSizes"]
