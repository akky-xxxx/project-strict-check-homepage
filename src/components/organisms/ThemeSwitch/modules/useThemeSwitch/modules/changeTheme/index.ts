import Cookies from "js-cookie"

import { COOKIE_KEY_THEME } from "../../../../../../../shared/constants/COOKIE_KEYS"

import type { Theme } from "../../../../../../../shared/types/Theme"

export const changeTheme = (theme: Theme) => {
  document.querySelector("html")?.setAttribute("data-theme", theme)
  Cookies.set(COOKIE_KEY_THEME, theme)
}
