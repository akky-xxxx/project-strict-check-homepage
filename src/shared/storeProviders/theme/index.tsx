"use client"

import { createContext, useRef, useContext } from "react"
import { useStore } from "zustand"

import { store } from "./store"

import type { ThemeStore } from "@shared/storeProviders/theme/store/types/ThemeStore"
import type { Theme } from "@shared/types/Theme"
import type { ReactNode } from "react"

type ThemeStoreApi = ReturnType<typeof store.createStore>

const ThemeStoreContext = createContext<ThemeStoreApi | undefined>(
  undefined,
)

type ThemeStoreProviderProps = {
  children: ReactNode
  theme: Theme
}

export const ThemeProvider = (props: ThemeStoreProviderProps) => {
  const { children, theme } = props
  const storeRef = useRef<ThemeStoreApi>()
  if (!storeRef.current) {
    storeRef.current = store.createStore(
      store.initializeStore(theme),
    )
  }

  return (
    <ThemeStoreContext.Provider value={storeRef.current}>
      {children}
    </ThemeStoreContext.Provider>
  )
}

// eslint-disable-next-line sc-js/forbidden-multiple-named-exports
export const useThemeStore = <T, >(
  selector: (store: ThemeStore) => T,
): T => {
  const themeStoreContext = useContext(ThemeStoreContext)

  if (!themeStoreContext) throw new Error("useThemeStore must be used within ThemeStoreProvider")

  return useStore(themeStoreContext, selector)
}
