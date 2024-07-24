"use client"

import { createContext, useRef, useContext } from "react"
import { useStore } from "zustand"

import { store } from "./store"

import type { PackageNameStore } from "./store/types/PackageNameStore"
import type { PackageName } from "../../types/PackageName"
import type { ReactNode } from "react"

type PackageNameStoreApi = ReturnType<typeof store.createStore>

const PackageNameStoreContext = createContext<PackageNameStoreApi | undefined>(
  undefined,
)

type PackageNameStoreProviderProps = {
  children: ReactNode
  packageName: PackageName
}

export const PackageNameProvider = (props: PackageNameStoreProviderProps) => {
  const { children, packageName } = props
  const storeRef = useRef<PackageNameStoreApi>()
  if (!storeRef.current) {
    storeRef.current = store.createStore(
      store.initializeStore(packageName),
    )
  }

  return (
    <PackageNameStoreContext.Provider value={storeRef.current}>
      {children}
    </PackageNameStoreContext.Provider>
  )
}

// eslint-disable-next-line sc-js/forbidden-multiple-named-exports
export const usePackageNameStore = <T, >(
  selector: (store: PackageNameStore) => T,
): T => {
  const packageNameStoreContext = useContext(PackageNameStoreContext)

  if (!packageNameStoreContext) throw new Error("usePackageNameStore must be used within PackageNameStoreProvider")

  return useStore(packageNameStoreContext, selector)
}
