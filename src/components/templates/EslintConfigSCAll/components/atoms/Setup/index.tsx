import { Fragment } from "react"

import { Heading3 } from "../../../../../atoms/Heading3"
import { EslintConfigTabContents } from "../../../../../organisms/EslintConfigTabContents"

import type { FC } from "react"

const source = `// eslint.config.mjs
import eslintConfigSC from "eslint-config-sc"

export default [
  eslintConfigSC.getConfigs("typescript", ["react", "next", "jest", "storybook"]),
].flat()
`

export const Setup: FC = () => (
  <Fragment>
    <Heading3 id="setup">Setup</Heading3>
    <EslintConfigTabContents
      flatCode={source}
      legacyCode="// Incompatible"
    />
  </Fragment>
)
