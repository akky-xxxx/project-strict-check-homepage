import { Fragment } from "react"

import { HEADINGS_INFO } from "@shared/constants/HEADINGS_INFO"

import { Heading3 } from "../../../../../atoms/Heading3"
import { SyntaxHighlighter } from "../../../../../atoms/SyntaxHighlighter"

import type { FC } from "react"

const {
  ESLINT_CONFIG_ALL: {
    HOME: {
      SETUP,
    },
  },
} = HEADINGS_INFO

const source = `// eslint.config.mjs
import eslintConfigSCAll from "eslint-config-sc"

export default [
  eslintConfigSCAll.getConfigs("typescript", ["react", "next", "jest", "storybook"]),
].flat()
`

export const Setup: FC = () => (
  <Fragment>
    <Heading3 id={SETUP.hash}>{SETUP.name}</Heading3>
    <SyntaxHighlighter code={source} language="javascript" />
  </Fragment>
)
