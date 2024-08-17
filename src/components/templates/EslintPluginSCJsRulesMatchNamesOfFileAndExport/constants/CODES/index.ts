export const CODES = {
  OPTIONS: `{
  rules: {
    "sc-js/match-names-of-file-and-export": [
      <enabled>,
      {
        "captures": <String>[], // Next standard. string that be able to hands over to RegExp
        "captures": <RegExp>[], // Deprecated
      },
    ],
  },
}`,

  INCORRECT_EXAMPLE: `// /components/atoms/Button/index.tsx
export const button = () => {}`,

  CORRECT_EXAMPLE: `// /components/atoms/Button/index.tsx
export const Button = () => {}`,
} as const
