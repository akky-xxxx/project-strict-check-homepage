export const STORY_PARAMETERS = {
  THEME: {
    DARK: { backgrounds: { default: "dark" } },
    LIGHT: { backgrounds: { default: "light" } },
  },
  VIEWPORT: {
    PC: { viewport: { defaultViewport: "2" } },
    SP: { viewport: { defaultViewport: "0" } },
    TB: { viewport: { defaultViewport: "1" } },
  },
} as const
