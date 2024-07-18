import { Link } from "../../../../../atoms/Link"

import type { FC } from "react"

export const EslintConfigJest: FC = () => (
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
