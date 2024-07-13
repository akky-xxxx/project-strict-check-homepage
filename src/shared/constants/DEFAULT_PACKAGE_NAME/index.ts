import type { PackageName } from "@shared/types/PackageName"

export const DEFAULT_PACKAGE_NAME = {
  category: "------",
  linter: "eslint",
  target: "------",
} as const satisfies PackageName
