import { css } from "@panda/css"

const SWITCH_SIZE = "var(--switch-size)"

const frame = css({
  display: "inline-block",
  height: 34,
  padding: 2,
  verticalAlign: "bottom",
})

const root = css({
  backgroundColor: "backgroundColor",
  borderRadius: 9999,
  display: "inline-flex",
  justifyContent: "space-between",
  outlineColor: {
    base: "backgroundColor.case2",

    _groupHover: "color.accent",
    _hasFocus: "color.accent",
  },
  outlineStyle: "solid",
  outlineWidth: 2,
  position: "relative",
  transition: "outline 0.2s ease-in-out",
  width: `calc(${SWITCH_SIZE} * 3)`,
})

const label = css({
  height: SWITCH_SIZE,
  position: "relative",
  width: SWITCH_SIZE,
})

const labelIcon = css({
  bottom: 0,
  color: "color",
  height: "var(--icon-size)",
  left: 0,
  margin: "auto",
  opacity: 0.5,
  pointerEvents: "none",
  position: "absolute",
  right: 0,
  top: 0,
  width: "var(--icon-size)",
})

const input = css({
  appearance: "none",
  backgroundColor: "backgroundColor.case2",
  borderRadius: 9999,
  cursor: "pointer",
  height: SWITCH_SIZE,
  width: SWITCH_SIZE,
})

const checkedInput = css({
  cursor: "auto",
})

export const styles = {
  checkedInput,
  frame,
  input,
  label,
  labelIcon,
  root,
} as const
