export const CODES = {
  OPTIONS: `{
  rules: {
    "sc-js/file-path-patterns": [
      <enabled>,
      {
         "allowPatterns": <String>[], // Next standard. string that be able to hands over to RegExp
         "allowPatterns": <RegExp>[], // Deprecated
      },
    ],
  },
}`,

  INCORRECT_EXAMPLE: `// Button.tsx
import { useState } from "react"`,

  CORRECT_EXAMPLE1: `// Button/index.tsx
import { useState } from "react"`,
  CORRECT_EXAMPLE2: `// Button/index.stories.tsx
import { Button } from "./"`,
  CORRECT_EXAMPLE3: `// Button/index.test.tsx
import { Button } from "./"`,
} as const
