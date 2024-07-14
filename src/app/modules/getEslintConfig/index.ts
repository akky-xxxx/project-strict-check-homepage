import { parse } from "valibot"

import { nextCookiesSchemas } from "@shared/schemas/nextCookiesSchemas"

import type { EslintConfig } from "@shared/types/EslintConfig"
import type { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies"

type GetEslintConfigInput = Pick<RequestCookie, "value"> | undefined
type GetEslintConfigReturn = EslintConfig
type GetEslintConfig = (input: GetEslintConfigInput) => GetEslintConfigReturn

const { eslintConfig: eslintConfigSchema } = nextCookiesSchemas

export const getEslintConfig: GetEslintConfig = (input) => {
  try {
    return parse(eslintConfigSchema, JSON.parse(input?.value ?? ""))
  } catch {
    return "flat"
  }
}
