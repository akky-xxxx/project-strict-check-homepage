export const CODES = {
  OPTIONS: `{
  rules: {
    "sc-js/match-names-of-file-and-export": [
      <enabled>,
      { "captures": <RegExp>[] },
    ],
  },
}`,

  INCORRECT_EXAMPLE: `// "sc-js/match-names-of-file-and-export": ["error", { "captures": [/\\/components\\/(?:atoms|molecules|organisms|templates)\\/([^/]+)\\/index.tsx/] }]
// /components/atoms/Button/index.tsx
export const button = () => {}`,

  CORRECT_EXAMPLE: `// "sc-js/match-names-of-file-and-export": ["error", { "captures": [/\\/components\\/(?:atoms|molecules|organsism|templates)\\/([^/]+)\\/index.tsx/]] }]
// /components/atoms/Button/index.tsx
export const Button = () => {}`,
} as const
