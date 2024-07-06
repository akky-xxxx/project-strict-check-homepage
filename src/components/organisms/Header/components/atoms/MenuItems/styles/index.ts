import { css } from "@panda/css"

const root = css({
  alignItems: {
    md: "center",
  },
  columnGap: {
    md: 12,
  },
  display: {
    base: "grid",
    md: "flex",
  },
  gridTemplateColumns: "50% 50%",
})

const packageLinkWrapper = css({
  gridColumn: "1/3",
  gridRow: "1/2",
})

const packageLink = css({
  alignItems: "center",
  borderBottomColor: "backgroundColor.case2",
  borderBottomStyle: "solid",
  borderBottomWidth: 1,
  display: "flex",
  height: {
    base: 48,
    md: "initial",
  },
  paddingInline: {
    base: 12,
    md: "initial",
  },
  textDecoration: "underline",
})

const packageSelectWrapper = css({
  alignItems: "center",
  borderBottomColor: "backgroundColor.case2",
  borderBottomStyle: "solid",
  borderBottomWidth: 1,
  display: "flex",
  gridColumn: "1/3",
  gridRow: "2/3",
  height: {
    base: 48,
    md: "initial",
  },
  paddingInline: {
    base: 12,
    md: "initial",
  },
})

const themeSwitchWrapper = css({
  gridColumn: "1/2",
  gridRow: "3/4",
  padding: {
    base: 12,
    md: "initial",
  },
})

const githubLinkWrapper = css({
  gridColumn: "2/3",
  gridRow: "3/4",
  padding: {
    base: 12,
    md: "initial",
  },
  textAlign: "center",
})

export const styles = {
  githubLinkWrapper,
  packageLink,
  packageLinkWrapper,
  packageSelectWrapper,
  root,
  themeSwitchWrapper,
} as const
