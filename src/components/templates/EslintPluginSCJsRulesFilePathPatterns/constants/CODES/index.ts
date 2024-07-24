export const CODES = {
  OPTIONS: `{
  rules: {
    "sc-js/file-path-patterns": [
      <enabled>,
      { "allowPatterns": <RegExp>[] },
    ],
  },
}`,

  INCORRECT_EXAMPLE: `// "sc-js/file-path-patterns": ["error", { "allowPatterns": [/index(?:\\.(?:stories|test))?\\.tsx?/] }]
// Button.tsx
import { useState } from "react"`,

  CORRECT_EXAMPLE1: `// "sc-js/file-path-patterns": ["error", { "allowPatterns": [/index(?:\\.(?:stories|test))?\\.tsx?/] }]
// Button/index.tsx
import { useState } from "react"`,
  CORRECT_EXAMPLE2: `// "sc-js/file-path-patterns": ["error", { "allowPatterns": [/index(?:\\.(?:stories|test))?\\.tsx?/] }]
// Button/index.stories.tsx
import { Button } from "./"`,
  CORRECT_EXAMPLE3: `// "sc-js/file-path-patterns": ["error", { "allowPatterns": [/index(?:\\.(?:stories|test))?\\.tsx?/] }]
// Button/index.test.tsx
import { Button } from "./"`,
} as const
