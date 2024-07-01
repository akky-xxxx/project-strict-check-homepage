import { literal, object, union, pipe, transform } from "valibot"

export const nextCookiesSchemas = {
  theme: pipe(
    union(
      [
        object({ value: literal("dark") }),
        object({ value: literal("light") }),
        object({ value: literal("system") }),
      ],
    ),
    transform((input) => input.value),
  ),
} as const
