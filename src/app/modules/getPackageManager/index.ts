import { parse } from "valibot"

import { nextCookiesSchemas } from "@shared/schemas/nextCookiesSchemas"

import type { PackageManager } from "@shared/types/PackageManager"
import type { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies"

type GetPackageManagerInput = Pick<RequestCookie, "value"> | undefined
type GetPackageManagerReturn = PackageManager
type GetPackageManager = (input: GetPackageManagerInput) => GetPackageManagerReturn

const { packageManager: packageManagerSchema } = nextCookiesSchemas

export const getPackageManager: GetPackageManager = (input) => {
  try {
    return parse(packageManagerSchema, JSON.parse(input?.value ?? ""))
  } catch {
    return "npm"
  }
}
