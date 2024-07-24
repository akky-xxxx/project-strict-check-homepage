import type { packageManagerSchema } from "@shared/schemas/packageManagerSchema"
import type { InferOutput } from "valibot"

export type PackageManager = InferOutput<typeof packageManagerSchema>
