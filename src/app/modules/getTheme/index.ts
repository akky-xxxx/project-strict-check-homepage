import { parse } from "valibot"

import { nextCookiesSchemas } from "../../../shared/schemas/nextCookiesSchemas"

import type { Theme } from "../../../shared/types/Theme"
import type { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies"

type GetThemeInput = Pick<RequestCookie, "value"> | undefined
type GetThemeReturn = Theme
type GetTheme = (input: GetThemeInput) => GetThemeReturn

const { theme: themeSchema } = nextCookiesSchemas

export const getTheme: GetTheme = (input) => {
  try {
    return parse(themeSchema, input)
  } catch {
    return "system"
  }
}
