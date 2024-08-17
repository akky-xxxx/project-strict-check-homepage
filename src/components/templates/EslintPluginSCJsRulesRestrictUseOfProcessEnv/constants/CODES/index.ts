export const CODES = {
  OPTIONS: `{
  rules: {
    "sc-js/restrict-use-of-process-env": [<enabled>],
  },
}`,

  INCORRECT_EXAMPLE1: "const env = process.env;",
  INCORRECT_EXAMPLE2: "const { env: variableName } = process;",

  CORRECT_EXAMPLE: `// const file
/* eslint-disable sc-js/restrict-use-of-process-env */
export const Environment = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 3000,
}

// side to use
import { Environment } from "../const";

const { NODE_ENV, PORT } = Environment;`,
} as const
