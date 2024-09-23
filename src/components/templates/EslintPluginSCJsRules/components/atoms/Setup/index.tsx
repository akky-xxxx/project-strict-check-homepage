import { Fragment } from "react"

import { Heading3 } from "../../../../../atoms/Heading3"
import { SyntaxHighlighter } from "../../../../../atoms/SyntaxHighlighter"

import type { FC } from "react"

const CODE = `// eslint.config.mjs
import eslintPluginSCJs from "eslint-plugin-sc-js"

export default [
  {
    plugins: {
      "js": eslintPluginSCJs, // It is not necessary when use the recommended config
    },
  },
  eslintPluginSCJs.configs.recommended,
]`

export const Setup: FC = () => (
  <Fragment>
    <Heading3 id="setup">Setup</Heading3>
    <SyntaxHighlighter code={CODE} language="javascript" />
  </Fragment>
)
