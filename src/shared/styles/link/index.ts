import { css } from "@panda/css"

export const link = css({
  color: "color.link",
  textDecoration: "underline",
  transition: "opacity 0.15s ease-in-out",

  _hover: {
    opacity: 0.7,
  },
})
