import { literal, object, union, pipe, transform } from "valibot"

export const themeSchema = pipe(
  object({
    state: object({
      theme: union(
        [
          literal("dark"),
          literal("light"),
          literal("system"),
        ],
      ),
    }),
  }),
  transform((input) => input.state.theme),
)
