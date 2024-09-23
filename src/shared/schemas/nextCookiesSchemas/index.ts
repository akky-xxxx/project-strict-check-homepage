import { packageManagerSchema } from "../packageManagerSchema"
import { themeSchema } from "../themeSchema"

export const nextCookiesSchemas = {
  packageManager: packageManagerSchema,
  theme: themeSchema,
} as const
