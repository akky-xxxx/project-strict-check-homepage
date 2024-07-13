import type { SemanticTokens } from "@pandacss/dev"

export const SEMANTIC_TOKEN_FONT_SIZES = {
  fontSize: {
    DEFAULT: { value: "{fontSizes.SIZE_16}" },
    sm: { value: "{fontSizes.SIZE_14}" },
  },

  siteName: {
    DEFAULT: { value: "{fontSizes.SIZE_20}" },
    md: { value: "{fontSizes.SIZE_22}" },
  },

  heading1: {
    DEFAULT: { value: "{fontSizes.SIZE_28}" },
    md: { value: "{fontSizes.SIZE_32}" },
  },
  heading2: {
    DEFAULT: { value: "{fontSizes.SIZE_22}" },
    md: { value: "{fontSizes.SIZE_24}" },
  },
  heading3: {
    DEFAULT: { value: "{fontSizes.SIZE_18}" },
    md: { value: "{fontSizes.SIZE_20}" },
  },
} as const satisfies SemanticTokens["fontSizes"]
