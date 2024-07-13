import { safeParse } from "valibot"

import { DEFAULT_PACKAGE_NAME } from "@shared/constants/DEFAULT_PACKAGE_NAME"
import { packageNameSchema } from "@shared/schemas/packageNameSchema"

import type { PackageName } from "@shared/types/PackageName"

type GetPackageNameInput = string
type GetPackageNameReturn = PackageName
type GetPackageName = (input: GetPackageNameInput) => GetPackageNameReturn

const REQUIRED_SPLIT_LENGTH = ["LINTER", "CATEGORY", "TARGET"].length
const FIRST_CHARACTER = 1

export const getPackageName: GetPackageName = (input) => {
  const splitUrl = input.slice(FIRST_CHARACTER).split("-")
  if (splitUrl.length < REQUIRED_SPLIT_LENGTH) return DEFAULT_PACKAGE_NAME
  const [linter, category, target] = splitUrl
  const result = safeParse(packageNameSchema, { category, linter, target })
  return result.success ? result.output : DEFAULT_PACKAGE_NAME
}