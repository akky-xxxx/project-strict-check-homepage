import { Fragment } from "react"

import { CODES } from "./constants/CODES"
import { Heading3 } from "../../../../../atoms/Heading3"
import { EslintConfigTabContents } from "../../../../../organisms/EslintConfigTabContents"

import type { FC } from "react"

export const Setup: FC = () => (
  <Fragment>
    <Heading3 id="setup">Setup</Heading3>
    <p>For Javascript project</p>
    <EslintConfigTabContents
      flatCode={CODES.FLAT1}
      legacyCode={CODES.LEGACY1}
    />

    <p>Equally</p>
    <EslintConfigTabContents
      flatCode={CODES.FLAT2}
      legacyCode={CODES.LEGACY2}
    />

    <p>For Typescript project</p>
    <EslintConfigTabContents
      flatCode={CODES.FLAT3}
      legacyCode={CODES.LEGACY3}
    />
  </Fragment>
)
