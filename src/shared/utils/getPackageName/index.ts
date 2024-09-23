import { safeParse } from "valibot"

import { DEFAULT_PACKAGE_NAME } from "@shared/constants/DEFAULT_PACKAGE_NAME"
import { packageNameSchema } from "@shared/schemas/packageNameSchema"

import type { PackageName } from "@shared/types/PackageName"

// 名前付けしたいため
// eslint-disable-next-line sonarjs/redundant-type-aliases
type GetPackageNameInput = string
type GetPackageNameReturn = PackageName
type GetPackageName = (input: GetPackageNameInput) => GetPackageNameReturn

const PACKAGE_NAME_POSITION = ["PACKAGES", "PACKAGE_NAME"].length
const REQUIRED_SPLIT_BY_SLASH_LENGTH = ["PACKAGES", "PACKAGE_NAME", "OTHER"].length

const splitToPackageNameAtoms = (input: string): string[] => {
  const splitBySlashUrl = input.split("/")
  if (splitBySlashUrl.length < REQUIRED_SPLIT_BY_SLASH_LENGTH) return []
  const splitHyphenUrl = splitBySlashUrl.at(PACKAGE_NAME_POSITION)?.split("-")
  return Array.isArray(splitHyphenUrl) ? splitHyphenUrl : []
}

const NOT_FOUND_INDEX = -1
const FIRST_CHARACTER = 0

const getOptimizedTarget = (target: string | undefined) => {
  const includeSlash = target?.indexOf("/")
  return (includeSlash != null && includeSlash > NOT_FOUND_INDEX)
    ? target?.slice(FIRST_CHARACTER, includeSlash)
    : target
}

const REQUIRED_SPLIT_BY_HYPHEN_LENGTH = ["LINTER", "CATEGORY", "PREFIX", "TARGET"].length

export const getPackageName: GetPackageName = (input) => {
  const splitHyphenUrl = splitToPackageNameAtoms(input)
  if (splitHyphenUrl.length !== REQUIRED_SPLIT_BY_HYPHEN_LENGTH) return DEFAULT_PACKAGE_NAME
  const [linter, category, prefix, target] = splitHyphenUrl
  const optimizedTarget = getOptimizedTarget(target)
  const result = safeParse(packageNameSchema, { category, linter, target: `${prefix ?? ""}-${optimizedTarget ?? ""}` })
  return result.success ? result.output : DEFAULT_PACKAGE_NAME
}
