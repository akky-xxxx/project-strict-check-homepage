import { eslintConfigSchema } from "../eslintConfigSchema"
import { packageManagerSchema } from "../packageManagerSchema"
import { themeSchema } from "../themeSchema"

export const nextCookiesSchemas = {
  eslintConfig: eslintConfigSchema,
  packageManager: packageManagerSchema,
  theme: themeSchema,
} as const
