import { Fragment } from "react"

import { HEADINGS_INFO } from "@shared/constants/HEADINGS_INFO"

import { CODES } from "./constants/CODES"
import { Heading3 } from "../../../../../atoms/Heading3"
import { SyntaxHighlighter } from "../../../../../atoms/SyntaxHighlighter"

import type { FC } from "react"

const {
  ESLINT_CONFIG_JS: {
    HOME: {
      SETUP,
    },
  },
} = HEADINGS_INFO

export const Setup: FC = () => (
  <Fragment>
    <Heading3 id={SETUP.hash}>{SETUP.name}</Heading3>
    <SyntaxHighlighter code={CODES.FLAT1} language="javascript" />

    <p>Equally</p>
    <SyntaxHighlighter code={CODES.FLAT2} language="javascript" />
  </Fragment>
)
