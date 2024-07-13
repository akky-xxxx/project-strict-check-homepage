import { css } from "@panda/css"

const activeButtons = css({
  backgroundColor: "backgroundColor",
  borderRadius: 9999,
  height: {
    base: "var(--switch-size-large)",
    md: "var(--switch-size-small)",
  },
  pointerEvents: "none",
  position: "absolute",
  transition: "transform 0.2s ease-in-out, backgroundColor 0.2s ease-in-out",
  width: {
    base: "var(--switch-size-large)",
    md: "var(--switch-size-small)",
  },
})

const activeButtonAtLight = css({
  transform: "translateX(0)",
})

const activeButtonAtDark = css({
  transform: {
    base: "translateX(var(--switch-size-large))",
    md: "translateX(var(--switch-size-small))",
  },
})

const activeButtonAtSystem = css({
  transform: {
    base: "translateX(calc(var(--switch-size-large) * 2))",
    md: "translateX(calc(var(--switch-size-small) * 2))",
  },
})

const icon = css({
  bottom: 0,
  color: "color",
  height: {
    base: "var(--icon-size-large)",
    md: "var(--icon-size-small)",
  },
  left: 0,
  lineHeight: 1,
  margin: "auto",
  opacity: 0,
  position: "absolute",
  right: 0,
  textAlign: "center",
  top: 0,
  transition: "color 0.2s ease-in-out, opacity 0.2s ease-in-out",
  width: {
    base: "var(--icon-size-large)",
    md: "var(--icon-size-small)",
  },
})

const shownIcon = css({
  color: "color.accent",
  opacity: 1,
})

export const styles = {
  activeButtonAtDark,
  activeButtonAtLight,
  activeButtonAtSystem,
  activeButtons,
  icon,
  shownIcon,
} as const
