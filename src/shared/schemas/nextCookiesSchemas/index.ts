import { literal, object, union, pipe, transform } from "valibot"

export const nextCookiesSchemas = {
  theme: pipe(
    union(
      [
        object({ value: literal("dark") }),
        object({ value: literal("light") }),
      ],
    ),
    transform((input) => input.value),
  ),
} as const
