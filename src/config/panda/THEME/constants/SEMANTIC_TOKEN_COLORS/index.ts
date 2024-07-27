import type { SemanticTokens } from "@pandacss/dev"

export const SEMANTIC_TOKEN_COLORS = {
  backgroundColor: {
    DEFAULT: {
      value: {
        _dark: "{colors.BLACK.100}",
        _light: "{colors.WHITE.100}",
      },
    },

    case2: {
      value: {
        _dark: "{colors.BLACK.200}",
        _light: "{colors.WHITE.200}",
      },
    },
    case3: {
      value: {
        _dark: "{colors.BLACK.300}",
        _light: "{colors.WHITE.300}",
      },
    },

    backdrop: {
      value: "#000",
    },
    headerFooter: {
      value: {
        _dark: "#00160e",
        _light: "#f6fff6",
      },
    },
  },
  borderColor: {
    DEFAULT: {
      value: {
        _dark: "#666a66",
        _light: "#bbbcbb",
      },
    },
  },

  color: {
    DEFAULT: {
      value: {
        _dark: "{colors.WHITE.100}",
        _light: "{colors.BLACK.100}",
      },
    },
    accent: {
      value: {
        _dark: "{colors.ACCENT.100}",
        _light: "{colors.ACCENT.200}",
      },
    },
    highlight: {
      value: {
        _dark: "{colors.HIGHLIGHT.100}",
        _light: "{colors.HIGHLIGHT.200}",
      },
    },
    link: {
      value: {
        _dark: "{colors.BLUE.100}",
        _light: "{colors.BLUE.200}",
      },
    },
  },

  syntaxHighlight: {
    backgroundColor: {
      value: {
        _dark: "{colors.BLACK.200}",
        _light: "{colors.WHITE.200}",
      },
    },
    color: {
      value: {
        _dark: "#f8f8f8",
        _light: "#000",
      },
    },
    comment: {
      value: {
        _dark: "#969896",
        _light: "#494949",
      },
    },
    highlight1: {
      value: {
        _dark: "#96cbfe",
        _light: "#12f",
      },
    },
    highlight2: {
      value: {
        _dark: "#a8ff60",
        _light: "#a626a4",
      },
    },
  },
} as const satisfies SemanticTokens["colors"]
