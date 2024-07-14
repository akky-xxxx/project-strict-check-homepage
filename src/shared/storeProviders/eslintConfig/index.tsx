"use client"

import { createContext, useRef, useContext } from "react"
import { useStore } from "zustand"

import { store } from "./store"

import type { EslintConfigStore } from "./store/types/EslintConfigStore"
import type { EslintConfig } from "@shared/types/EslintConfig"
import type { ReactNode } from "react"

type EslintConfigStoreApi = ReturnType<typeof store.createStore>

const EslintConfigStoreContext = createContext<EslintConfigStoreApi | undefined>(
  undefined,
)

type EslintConfigStoreProviderProps = {
  children: ReactNode
  eslintConfig: EslintConfig
}

export const EslintConfigProvider = (props: EslintConfigStoreProviderProps) => {
  const { children, eslintConfig } = props
  const storeRef = useRef<EslintConfigStoreApi>()
  if (!storeRef.current) {
    storeRef.current = store.createStore(
      store.initializeStore(eslintConfig),
    )
  }

  return (
    <EslintConfigStoreContext.Provider value={storeRef.current}>
      {children}
    </EslintConfigStoreContext.Provider>
  )
}

// eslint-disable-next-line sc-js/forbidden-multiple-named-exports
export const useEslintConfigStore = <T, >(
  selector: (store: EslintConfigStore) => T,
): T => {
  const eslintConfigStoreContext = useContext(EslintConfigStoreContext)

  if (!eslintConfigStoreContext) throw new Error("useEslintConfigStore must be used within EslintConfigStoreProvider")

  return useStore(eslintConfigStoreContext, selector)
}
