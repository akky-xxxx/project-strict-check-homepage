import { css } from "@panda/css"

const BACKGROUND_COLOR_CASE2 = "backgroundColor.case2"

const root = css({
  marginTop: 8,
})

const tabs = css({
  background: BACKGROUND_COLOR_CASE2,
  borderBottomColor: "backgroundColor.case3",
  borderBottomStyle: "solid",
  borderBottomWidth: 1,
  borderTopLeftRadius: { md: 8 },
  borderTopRightRadius: { md: 8 },
  display: "flex",
  flexWrap: "nowrap",
  overflowX: "auto",
  paddingInline: { md: 12 },
})

const tabItem = css({
  backgroundColor: BACKGROUND_COLOR_CASE2,
  borderBottomColor: BACKGROUND_COLOR_CASE2,
  borderBottomStyle: "solid",
  borderBottomWidth: 1,
  cursor: "pointer",
  padding: 12,
  transition: "border-bottom-color 0.2s ease-in-out, background-color 0.2s ease-in-out",
})

const activeTabItem = css({
  backgroundColor: "color.highlight",
  borderBottomColor: "color.accent",
  borderBottomStyle: "solid",
  borderBottomWidth: 1,
})

export const styles = {
  activeTabItem,
  root,
  tabItem,
  tabs,
} as const
