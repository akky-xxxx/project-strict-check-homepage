import { css } from "@panda/css"

export const heading = css({
  fontWeight: "fontWeight.bold",
  transition: "background-color 0.1s ease-in-out",

  _target: {
    backgroundColor: "color.highlight",
  },
})
