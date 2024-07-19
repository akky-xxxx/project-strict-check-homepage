import { safeParse } from "valibot"

import { DEFAULT_PACKAGE_NAME } from "@shared/constants/DEFAULT_PACKAGE_NAME"
import { packageNameSchema } from "@shared/schemas/packageNameSchema"

import type { PackageName } from "@shared/types/PackageName"

type GetPackageNameInput = string
type GetPackageNameReturn = PackageName
type GetPackageName = (input: GetPackageNameInput) => GetPackageNameReturn

const REQUIRED_SPLIT_LENGTH = ["LINTER", "CATEGORY", "PREFIX", "TARGET"].length
const FIRST_CHARACTER = 1

export const getPackageName: GetPackageName = (input) => {
  const splitUrl = input.replace("/packages", "").slice(FIRST_CHARACTER).split("-")
  if (splitUrl.length < REQUIRED_SPLIT_LENGTH) return DEFAULT_PACKAGE_NAME
  const [linter, category, prefix, target] = splitUrl
  const result = safeParse(packageNameSchema, { category, linter, target: `${prefix ?? ""}-${target ?? ""}` })
  return result.success ? result.output : DEFAULT_PACKAGE_NAME
}
