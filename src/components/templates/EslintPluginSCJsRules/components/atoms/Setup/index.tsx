import { Fragment } from "react"

import { CODES } from "./constants/CODES"
import { Heading3 } from "../../../../../atoms/Heading3"
import { SyntaxHighlighter } from "../../../../../atoms/SyntaxHighlighter"

import type { FC } from "react"

export const Setup: FC = () => (
  <Fragment>
    <Heading3 id="setup">Setup</Heading3>
    <SyntaxHighlighter code={CODES.FLAT} language="javascript" />
  </Fragment>
)
