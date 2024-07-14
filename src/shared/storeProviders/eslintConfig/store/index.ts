import Cookies from "js-cookie"
import { persist, createJSONStorage, devtools, type StateStorage } from "zustand/middleware"
import { createStore } from "zustand/vanilla"

import { COOKIE_KEY_ESLINT_CONFIG } from "@shared/constants/COOKIE_KEYS"

import type { EslintConfigState } from "./types/EslintConfigState"
import type { EslintConfigStore } from "./types/EslintConfigStore"
import type { EslintConfig } from "@shared/types/EslintConfig"

const cookieStorage: StateStorage = {
  getItem: () => null,
  removeItem: () => null,
  setItem: (name: string, value: string) => {
    Cookies.set(name, value)
  },
}

const initializeStore = (eslintConfig: EslintConfig): EslintConfigState => ({ eslintConfig })

const defaultInitState: EslintConfigState = {
  eslintConfig: "flat",
}

const createEslintConfigStore = (
  initState: EslintConfigState = defaultInitState,
) => createStore<EslintConfigStore>()(
  devtools(
    persist(
      (set) => ({
        ...initState,
        setEslintConfig: (newEslintConfig: EslintConfig) => {
          set({ eslintConfig: newEslintConfig })
        },
      }),
      {
        name: COOKIE_KEY_ESLINT_CONFIG,
        storage: createJSONStorage(() => cookieStorage),
      },
    ),
  ),
)

export const store = {
  createStore: createEslintConfigStore,
  initializeStore,
}
