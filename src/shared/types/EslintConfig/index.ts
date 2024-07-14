import type { eslintConfigSchema } from "@shared/schemas/eslintConfigSchema"
import type { InferOutput } from "valibot"

export type EslintConfig = InferOutput<typeof eslintConfigSchema>
