import { css } from "@panda/css"

const activeButtons = css({
  backgroundColor: "backgroundColor",
  borderRadius: 9999,
  height: "var(--switch-size)",
  pointerEvents: "none",
  position: "absolute",
  transition: "transform 0.2s ease-in-out, backgroundColor 0.2s ease-in-out",
  width: "var(--switch-size)",
})

const activeButtonAtLight = css({
  transform: "translateX(0)",
})

const activeButtonAtDark = css({
  transform: "translateX(var(--switch-size))",
})

const activeButtonAtSystem = css({
  transform: "translateX(calc(var(--switch-size) * 2))",
})

const icon = css({
  bottom: 0,
  color: "color",
  height: "var(--icon-size)",
  left: 0,
  lineHeight: 1,
  margin: "auto",
  opacity: 0,
  position: "absolute",
  right: 0,
  textAlign: "center",
  top: 0,
  transition: "color 0.2s ease-in-out, opacity 0.2s ease-in-out",
  width: "var(--icon-size)",
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
