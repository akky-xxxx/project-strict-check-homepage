import { DEFAULT_PACKAGE_NAME } from "@shared/constants/DEFAULT_PACKAGE_NAME"

import { PACKAGE_NAMES } from "../../constants/PACKAGE_NAMES"

import type { PackageName } from "@shared/types/PackageName"

export const getTargetItems = (categoryName: PackageName["category"] = DEFAULT_PACKAGE_NAME.target): Array<PackageName["target"]> => {
  if (categoryName === DEFAULT_PACKAGE_NAME.target) return [DEFAULT_PACKAGE_NAME.target]
  return [...PACKAGE_NAMES.eslint[categoryName]]
    .sort()
    .map((targetName) => (targetName))
}
