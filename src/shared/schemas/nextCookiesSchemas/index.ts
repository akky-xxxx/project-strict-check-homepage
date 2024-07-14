import { eslintConfigSchema } from "../eslintConfigSchema"
import { themeSchema } from "../themeSchema"

export const nextCookiesSchemas = {
  eslintConfig: eslintConfigSchema,
  theme: themeSchema,
} as const
