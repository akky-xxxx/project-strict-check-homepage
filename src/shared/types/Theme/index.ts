import type { nextCookiesSchemas } from "../../schemas/nextCookiesSchemas"
import type { InferOutput } from "valibot"

export type Theme = InferOutput<typeof nextCookiesSchemas.theme>
