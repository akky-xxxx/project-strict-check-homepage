import type { PackageManagerState } from "../PackageManagerState"
import type { PackageManager } from "@shared/types/PackageManager"

type PackageManagerActions = {
  setPackageManager: (packageManager: PackageManager) => void
}

export type PackageManagerStore = PackageManagerActions & PackageManagerState
