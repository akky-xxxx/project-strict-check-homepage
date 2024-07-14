import Cookies from "js-cookie"
import { persist, createJSONStorage, devtools, type StateStorage } from "zustand/middleware"
import { createStore } from "zustand/vanilla"

import { COOKIE_KEY_PACKAGE_MANAGER } from "@shared/constants/COOKIE_KEYS"

import type { PackageManagerState } from "./types/PackageManagerState"
import type { PackageManagerStore } from "./types/PackageManagerStore"
import type { PackageManager } from "@shared/types/PackageManager"

const cookieStorage: StateStorage = {
  getItem: () => null,
  removeItem: () => null,
  setItem: (name: string, value: string) => {
    Cookies.set(name, value)
  },
}

const initializeStore = (
  packageManager: PackageManager,
): PackageManagerState => ({ packageManager })

const defaultInitState: PackageManagerState = {
  packageManager: "npm",
}

const createPackageManagerStore = (
  initState: PackageManagerState = defaultInitState,
) => createStore<PackageManagerStore>()(
  devtools(
    persist(
      (set) => ({
        ...initState,
        setPackageManager: (newPackageManager: PackageManager) => {
          set({ packageManager: newPackageManager })
        },
      }),
      {
        name: COOKIE_KEY_PACKAGE_MANAGER,
        storage: createJSONStorage(() => cookieStorage),
      },
    ),
  ),
)

export const store = {
  createStore: createPackageManagerStore,
  initializeStore,
}
