import { defineKeyframes } from "@pandacss/dev"

/* eslint-disable @typescript-eslint/naming-convention, sort-keys, sonarjs/no-duplicate-string */
export const KEYFRAMES = defineKeyframes({
  drawIconUpperLineToClose: {
    "0%": { transform: "translateY(11px) rotate(-45deg)" },
    "50%": { transform: "translateY(11px) rotate(0deg)" },
    "100%": { transform: "translateY(0px) rotate(0deg)" },
  },
  drawIconUpperLineToOpen: {
    "0%": { transform: "translateY(0px) rotate(0deg)" },
    "50%": { transform: "translateY(11px) rotate(0deg)" },
    "100%": { transform: "translateY(11px) rotate(-45deg)" },
  },

  drawIconMiddleLineToClose: {
    "0%": { transform: "scaleX(0%)" },
    "50%": { transform: "scaleX(0%)" },
    "100%": { transform: "scaleX(100%)" },
  },
  drawIconMiddleLineToOpen: {
    "0%": { transform: "scaleX(100%)" },
    "50%": { transform: "scaleX(0%)" },
    "100%": { transform: "scaleX(0%)" },
  },

  drawIconLowerLineToClose: {
    "0%": { transform: "translateY(-11px) rotate(45deg)" },
    "50%": { transform: "translateY(-11px) rotate(0deg)" },
    "100%": { transform: "translateY(0px) rotate(0deg)" },
  },
  drawIconLowerLineToOpen: {
    "0%": { transform: "translateY(0px) rotate(0deg)" },
    "50%": { transform: "translateY(-11px) rotate(0deg)" },
    "100%": { transform: "translateY(-11px) rotate(45deg)" },
  },
})
