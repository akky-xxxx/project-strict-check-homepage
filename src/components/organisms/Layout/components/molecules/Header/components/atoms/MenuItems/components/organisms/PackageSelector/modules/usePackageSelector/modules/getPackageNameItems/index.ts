import { DEFAULT_PACKAGE_NAME } from "@shared/constants/DEFAULT_PACKAGE_NAME"

import { PACKAGE_NAMES } from "../../constants/PACKAGE_NAMES"

const DEPTH = (["LINTER", "CATEGORY", "TARGET"] as const).length

export const getPackageNameItems = (): string[] => Object.entries(PACKAGE_NAMES).map((
  keyValue1,
) => {
  const [linterName, categories] = keyValue1
  return Object.entries(categories).map((keyValue2) => {
    const [categoryName, targets] = keyValue2
    return targets.map((targetName) => {
      if (categoryName === DEFAULT_PACKAGE_NAME.category || targetName === DEFAULT_PACKAGE_NAME.target) return ""
      return [linterName, categoryName, targetName].join("-")
    })
  })
})
  .flat(DEPTH)
  .filter(Boolean)
