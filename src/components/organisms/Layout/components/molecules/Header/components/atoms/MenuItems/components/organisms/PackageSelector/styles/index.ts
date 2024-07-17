import { css } from "@panda/css"

const overTb = css({
  alignItems: "center",
  columnGap: 8,
  display: {
    base: "none",
    md: "flex",
  },
  height: 30,
})

const onlySp = css({
  alignItems: "center",
  columnGap: 4,
  display: {
    base: "flex",
    md: "none",
  },
  height: 48,
})

const select = css({
  backgroundColor: "backgroundColor.case2",
  color: "color",
  cursor: "pointer",
  height: {
    base: 48,
    md: 30,
  },
  paddingInline: {
    md: 8,
  },
})

const linter = css({
  width: 95,
})

const category = css({
  width: 90,
})

const target = css({
  width: 112,
})

const packageNameStyle = css({
  width: 220,
})

export const styles = {
  category,
  linter,
  onlySp,
  overTb,
  packageNameStyle,
  select,
  target,
} as const
