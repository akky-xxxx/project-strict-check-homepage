export const CODES = {
  OPTIONS: `{
  rules: {
    "sc-js/forbidden-multiple-named-exports": [<enabled>],
  },
}`,

  INCORRECT_EXAMPLE: `export const One = 1;
export const Two = 2;`,

  CORRECT_EXAMPLE: "export const One = 1;",
} as const
