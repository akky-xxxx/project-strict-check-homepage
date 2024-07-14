"use client"

import { createContext, useRef, useContext } from "react"
import { useStore } from "zustand"

import { store } from "./store"

import type { PackageManagerStore } from "./store/types/PackageManagerStore"
import type { PackageManager } from "@shared/types/PackageManager"
import type { ReactNode } from "react"

type PackageManagerStoreApi = ReturnType<typeof store.createStore>

const PackageManagerStoreContext = createContext<PackageManagerStoreApi | undefined>(
  undefined,
)

type PackageManagerStoreProviderProps = {
  children: ReactNode
  packageManager: PackageManager
}

export const PackageManagerProvider = (props: PackageManagerStoreProviderProps) => {
  const { children, packageManager } = props
  const storeRef = useRef<PackageManagerStoreApi>()
  if (!storeRef.current) {
    storeRef.current = store.createStore(
      store.initializeStore(packageManager),
    )
  }

  return (
    <PackageManagerStoreContext.Provider value={storeRef.current}>
      {children}
    </PackageManagerStoreContext.Provider>
  )
}

// eslint-disable-next-line sc-js/forbidden-multiple-named-exports
export const usePackageManagerStore = <T, >(
  selector: (store: PackageManagerStore) => T,
): T => {
  const packageManagerStoreContext = useContext(PackageManagerStoreContext)

  if (!packageManagerStoreContext) throw new Error("usePackageManagerStore must be used within PackageManagerStoreProvider")

  return useStore(packageManagerStoreContext, selector)
}
