import { literal, object, union, pipe, transform } from "valibot"

export const packageManagerSchema = pipe(
  object({
    state: object({
      packageManager: union(
        [
          literal("npm"),
          literal("yarn"),
          literal("pnpm"),
          literal("bun"),
        ],
      ),
    }),
  }),
  transform((input) => input.state.packageManager),
)
