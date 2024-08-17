import { Fragment } from "react"

import { marginTop } from "@shared/styles/marginTop"

import { Paragraph } from "../../../../../atoms/Paragraph"
import { SyntaxHighlighter } from "../../../../../atoms/SyntaxHighlighter"
import { CODES } from "../../../constants/CODES"

import type { FC } from "react"

export const InCorrectExample: FC = () => (
  <Fragment>
    <Paragraph>
      Example of invalid ❌ code when above option value
    </Paragraph>
    <div className={marginTop}>
      <SyntaxHighlighter
        code={CODES.INCORRECT_EXAMPLE}
        language="javascript"
      />
    </div>
  </Fragment>
)
