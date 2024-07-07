import type { ThemeState } from "../ThemeState"
import type { Theme } from "@shared/types/Theme"

type ThemeActions = {
  setTheme: (newTheme: Theme) => void
}

export type ThemeStore = ThemeActions & ThemeState
