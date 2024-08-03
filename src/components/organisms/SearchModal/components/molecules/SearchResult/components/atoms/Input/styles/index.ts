import { css } from "@panda/css"

const root = css({
  position: "relative",
})

const iconWrapper = css({
  bottom: 0,
  height: 30,
  marginBlock: "auto",
  position: "absolute",
  top: 0,
  width: 30,
})

const resetIconWrapper = css({
  right: 10,
})

const resetButton = css({
  cursor: "pointer",
  transition: "opacity 0.1s ease-in-out",
})

const disableResetButton = css({
  opacity: 0.3,
  pointerEvents: "none",
})

const label = css({
  display: "block",
  position: "relative",
})

const searchIconWrapper = css({
  left: 10,
})

const input = css({
  borderColor: "borderColor",
  borderStyle: "solid",
  borderWidth: 1,
  paddingBlock: 8,
  paddingInline: 50,
  width: "100%",

  _focus: {
    outlineColor: "color.accent",
  },
})

export const styles = {
  disableResetButton,
  iconWrapper,
  input,
  label,
  resetButton,
  resetIconWrapper,
  root,
  searchIconWrapper,
} as const
