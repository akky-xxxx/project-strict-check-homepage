import type { packageNameSchema } from "@shared/schemas/packageNameSchema"
import type { InferOutput } from "valibot"

export type PackageName = InferOutput<typeof packageNameSchema>
