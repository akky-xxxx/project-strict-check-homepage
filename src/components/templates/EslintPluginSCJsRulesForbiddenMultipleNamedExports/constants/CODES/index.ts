export const CODES = {
  OPTIONS: `{
  rules: {
    "sc-js/forbidden-multiple-named-exports": [<enabled>],
  },
}`,

  INCORRECT_EXAMPLE: `// "sc-js/forbidden-multiple-named-exports": ["error"]
export const One = 1;
export const Two = 2;`,

  CORRECT_EXAMPLE: `// "sc-js/forbidden-multiple-named-exports": ["error"]
export const One = 1;`,
} as const
