import type { Theme } from "@shared/types/Theme"

export const changeTheme = (theme: Theme) => {
  document.querySelector("html")?.setAttribute("data-theme", theme)
}
