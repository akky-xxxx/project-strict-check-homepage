import Cookies from "js-cookie"
import { persist, createJSONStorage, devtools, type StateStorage } from "zustand/middleware"
import { createStore } from "zustand/vanilla"

import { COOKIE_KEY_THEME } from "@shared/constants/COOKIE_KEYS"

import type { ThemeState } from "./types/ThemeState"
import type { ThemeStore } from "./types/ThemeStore"
import type { Theme } from "@shared/types/Theme"

const cookieStorage: StateStorage = {
  getItem: () => null,
  removeItem: () => null,
  setItem: (name: string, value: string) => {
    Cookies.set(name, value)
  },
}

const initializeStore = (theme: Theme): ThemeState => ({ theme })

const defaultInitState: ThemeState = {
  theme: "system",
}

const createThemeStore = (
  initState: ThemeState = defaultInitState,
) => createStore<ThemeStore>()(
  devtools(
    persist(
      (set) => ({
        ...initState,
        setTheme: (newTheme: Theme) => {
          set({ theme: newTheme })
        },
      }),
      {
        name: COOKIE_KEY_THEME,
        storage: createJSONStorage(() => cookieStorage),
      },
    ),
  ),
)

export const store = {
  createStore: createThemeStore,
  initializeStore,
}
