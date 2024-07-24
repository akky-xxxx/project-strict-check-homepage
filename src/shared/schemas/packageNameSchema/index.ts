import { literal, object, union } from "valibot"

export const packageNameSchema = union([
  object({
    linter: union([
      literal("eslint"),
    ]),

    category: union([
      literal("------"),
      literal("config"),
    ]),

    target: union([
      literal("------"),
      literal("sc-all"),
      literal("sc-jest"),
      literal("sc-js"),
      literal("sc-next"),
      literal("sc-react"),
      literal("sc-storybook"),
      literal("sc-ts"),
    ]),
  }),

  object({
    linter: union([
      literal("eslint"),
    ]),

    category: union([
      literal("------"),
      literal("plugin"),
    ]),

    target: union([
      literal("------"),
      literal("sc-js"),
    ]),
  }),
])
