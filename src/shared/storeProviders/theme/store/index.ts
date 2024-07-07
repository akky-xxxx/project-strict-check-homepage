import { createStore } from "zustand/vanilla"

import type { ThemeState } from "./types/ThemeState"
import type { ThemeStore } from "./types/ThemeStore"
import type { Theme } from "@shared/types/Theme"

const initializeStore = (theme: Theme): ThemeState => ({ theme })

const defaultInitState: ThemeState = {
  theme: "system",
}

const createThemeStore = (
  initState: ThemeState = defaultInitState,
) => createStore<ThemeStore>()((set) => ({
  ...initState,
  setTheme: (newTheme: Theme) => {
    set({ theme: newTheme })
  },
}))

export const store = {
  createStore: createThemeStore,
  initializeStore,
}
