import { Link } from "../Link"

import type { FC } from "react"

export const EslintConfigJestIntroduction: FC = () => (
  <p>
    This package sets some rules based on the shared config of
    {" "}
    <Link
      isExternal
      href="https://www.npmjs.com/package/eslint-plugin-jest"
    >
      eslint-plugin-jest
    </Link>
    .
  </p>
)
