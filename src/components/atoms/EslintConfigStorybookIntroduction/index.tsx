import { Link } from "../Link"

import type { FC } from "react"

export const EslintConfigStorybookIntroduction: FC = () => (
  <p>
    This package sets some rules based on the shared config of
    {" "}
    <Link href="https://www.npmjs.com/package/eslint-plugin-storybook">
      eslint-plugin-storybook
    </Link>
    .
  </p>
)
