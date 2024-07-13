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
      literal("all"),
      literal("jest"),
      literal("js"),
      literal("next"),
      literal("react"),
      literal("storybook"),
      literal("ts"),
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
      literal("js"),
    ]),
  }),
])
