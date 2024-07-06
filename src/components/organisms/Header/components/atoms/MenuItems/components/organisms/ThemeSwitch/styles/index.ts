import { css } from "../../../../../../../../../../../styled-system/css"

const SMALL_SWITCH_SIZE = "var(--switch-size-small)"
const LARGE_SWITCH_SIZE = "var(--switch-size-large)"

const frame = css({
  display: "inline-block",
  height: {
    base: `calc(${LARGE_SWITCH_SIZE} + 4px)`,
    md: `calc(${SMALL_SWITCH_SIZE} + 4px)`,
  },
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
  },
  outlineStyle: "solid",
  outlineWidth: 2,
  position: "relative",
  transition: "outline 0.2s ease-in-out",
  width: {
    base: `calc(${LARGE_SWITCH_SIZE} * 3)`,
    md: `calc(${SMALL_SWITCH_SIZE} * 3)`,
  },
})

const label = css({
  height: {
    base: LARGE_SWITCH_SIZE,
    md: SMALL_SWITCH_SIZE,
  },
  position: "relative",
  width: {
    base: LARGE_SWITCH_SIZE,
    md: SMALL_SWITCH_SIZE,
  },
})

const labelIcon = css({
  bottom: 0,
  color: "color",
  height: {
    base: "var(--icon-size-large)",
    md: "var(--icon-size-small)",
  },
  left: 0,
  margin: "auto",
  opacity: 0.5,
  pointerEvents: "none",
  position: "absolute",
  right: 0,
  top: 0,
  width: {
    base: "var(--icon-size-large)",
    md: "var(--icon-size-small)",
  },
})

const input = css({
  appearance: "none",
  backgroundColor: "backgroundColor.case2",
  borderRadius: 9999,
  cursor: "pointer",
  height: {
    base: LARGE_SWITCH_SIZE,
    md: SMALL_SWITCH_SIZE,
  },
  width: {
    base: LARGE_SWITCH_SIZE,
    md: SMALL_SWITCH_SIZE,
  },
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
