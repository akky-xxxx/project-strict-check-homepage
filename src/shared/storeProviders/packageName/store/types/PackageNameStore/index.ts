import type { PackageNameState } from "../PackageNameState"
import type { PackageName } from "@shared/types/PackageName"

type PackageNameActions = {
  setPackageCategoryName: (category: PackageName["category"]) => void
  setPackageName: (packageName: PackageName) => void
  setPackageTargetName: (target: PackageName["target"]) => void
}

export type PackageNameStore = PackageNameActions & PackageNameState
