import { safeParse } from "valibot"
import { devtools } from "zustand/middleware"
import { createStore } from "zustand/vanilla"

import { DEFAULT_PACKAGE_NAME } from "@shared/constants/DEFAULT_PACKAGE_NAME"
import { packageNameSchema } from "@shared/schemas/packageNameSchema"

import type { PackageNameState } from "./types/PackageNameState"
import type { PackageNameStore } from "./types/PackageNameStore"

const DEFAULT_INIT_STATE: PackageNameState = {
  packageName: DEFAULT_PACKAGE_NAME,
}

const createPackageNameStore = (
  initState: PackageNameState = DEFAULT_INIT_STATE,
) => createStore<PackageNameStore>()(
  devtools(
    (set) => ({
      ...initState,
      setPackageCategoryName: (category) => {
        set({
          packageName: {
            category,
            linter: "eslint",
            target: DEFAULT_PACKAGE_NAME.target,
          },
        })
      },
      setPackageName: (packageName) => {
        set({ packageName })
      },
      setPackageTargetName: (target) => {
        set((current) => {
          const newData = {
            category: current.packageName.category,
            linter: current.packageName.linter,
            target,
          }

          const result = safeParse(packageNameSchema, newData)
          if (!result.success) return DEFAULT_INIT_STATE
          return {
            packageName: result.output,
          }
        })
      },
    }),
  ),
)

export const store = {
  createStore: createPackageNameStore,
}
