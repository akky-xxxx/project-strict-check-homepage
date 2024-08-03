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

const navStyle = css({
  alignItems: {
    md: "center",
  },
  columnGap: {
    md: 12,
  },
  display: {
    md: "flex",
  },
})

const packageLink = css({
  alignItems: "center",
  display: "flex",
  height: 48,
  paddingInline: {
    base: 12,
    md: "initial",
  },
  textDecoration: "underline",
})

const packageSelectWrapper = css({
  lg: {
    alignItems: "center",
    display: "flex",
    gridColumn: "1/3",
    gridRow: "2/3",
  },

  md: {
    display: "none",
  },

  base: {
    height: 48,
    paddingInline: 12,
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
  navStyle,
  packageLink,
  packageSelectWrapper,
  root,
  themeSwitchWrapper,
} as const
