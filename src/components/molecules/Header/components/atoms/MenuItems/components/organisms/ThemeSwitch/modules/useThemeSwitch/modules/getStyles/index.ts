import { styles } from "./styles"

import type { Theme } from "@shared/types/Theme"

// eslint-disable-next-line complexity
export const getStyles = (selectedTheme: Theme) => {
  const isActiveLight = selectedTheme === "light"
  const isActiveDark = selectedTheme === "dark"
  const isActiveSystem = selectedTheme === "system"

  const activeButtons = [
    styles.activeButtons,
    isActiveLight && styles.activeButtonAtLight,
    isActiveDark && styles.activeButtonAtDark,
    isActiveSystem && styles.activeButtonAtSystem,
  ]

  const lightIconStyles = [
    styles.icon,
    isActiveLight && styles.shownIcon,
  ]

  const darkIconStyles = [
    styles.icon,
    isActiveDark && styles.shownIcon,
  ]

  const systemIconStyles = [
    styles.icon,
    isActiveSystem && styles.shownIcon,
  ]

  return {
    activeButtons,
    darkIconStyles,
    lightIconStyles,
    systemIconStyles,
  }
}
