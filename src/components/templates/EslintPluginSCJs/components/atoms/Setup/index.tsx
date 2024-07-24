import { Fragment } from "react"

import { CODES } from "./constants/CODES"
import { Heading3 } from "../../../../../atoms/Heading3"
import { EslintConfigTabContents } from "../../../../../organisms/EslintConfigTabContents"

import type { FC } from "react"

export const Setup: FC = () => (
  <Fragment>
    <Heading3 id="setup">Setup</Heading3>
    <EslintConfigTabContents
      flatCode={CODES.FLAT}
      legacyCode={CODES.LEGACY}
    />
  </Fragment>
)
