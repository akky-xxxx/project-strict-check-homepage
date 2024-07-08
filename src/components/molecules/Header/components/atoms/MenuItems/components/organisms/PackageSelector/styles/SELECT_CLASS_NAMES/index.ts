/* eslint-disable sc-js/file-path-patterns */
import { css, cx } from "@panda/css"

import type { Props } from "react-select"

const height = css({
  height: {
    base: 48,
    md: 30,
  },
  minHeight: "initial !important",
})

const background = css({
  backgroundColor: "var(--colors-background-color-case2) !important",
})

const control = css({
  backgroundColor: "var(--colors-background-color-case2) !important",
  borderColor: "transparent",
  borderWidth: "0 !important",
  color: "var(--colors-color)",
  cursor: "pointer !important",
  display: "grid",
  placeContent: "center",
  position: "relative",
  width: 80,
})

const focusedControl = css({
  boxShadow: "0 0 1px var(--colors-color-accent) !important",
})

const indicatorSeparator = css({
  display: "none",
})

const valueContainer = css({
  display: "grid",
  height: "100%",
  placeContent: "center",
})

const singleValue = css({
  color: "color !important",
})

const option = css({
  cursor: "pointer !important",
  display: "grid !important",
  placeContent: "center",

  _hover: {
    backgroundColor: "var(--colors-background-color) !important",
  },
})

export const SELECT_CLASS_NAMES = {
  container: () => height,
  control: (props) => cx(height, control, props.isFocused && focusedControl),
  indicatorSeparator: () => indicatorSeparator,
  menu: () => background,
  option: () => cx(height, background, option),
  singleValue: () => singleValue,
  valueContainer: () => cx(height, valueContainer),
} as const satisfies Props["classNames"]
