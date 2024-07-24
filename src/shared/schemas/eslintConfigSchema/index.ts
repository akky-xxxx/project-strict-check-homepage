import { literal, object, union, pipe, transform } from "valibot"

export const eslintConfigSchema = pipe(
  object({
    state: object({
      eslintConfig: union(
        [
          literal("flat"),
          literal("legacy"),
        ],
      ),
    }),
  }),
  transform((input) => input.state.eslintConfig),
)
