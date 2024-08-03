import { Fragment } from "react"

import { HEADINGS_INFO } from "@shared/constants/HEADINGS_INFO"

import { CODES } from "./constants/CODES"
import { Heading3 } from "../../../../../atoms/Heading3"
import { EslintConfigTabContents } from "../../../../../organisms/EslintConfigTabContents"

import type { FC } from "react"

const {
  ESLINT_PLUGIN_SC_JS: {
    HOME: {
      SETUP,
    },
  },
} = HEADINGS_INFO

export const Setup: FC = () => (
  <Fragment>
    <Heading3 id={SETUP.hash}>{SETUP.name}</Heading3>
    <EslintConfigTabContents
      flatCode={CODES.FLAT}
      legacyCode={CODES.LEGACY}
    />
  </Fragment>
)
