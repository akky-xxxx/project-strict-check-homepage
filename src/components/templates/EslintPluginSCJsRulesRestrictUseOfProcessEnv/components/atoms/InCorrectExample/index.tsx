import { Fragment } from "react"

import { marginTop } from "@shared/styles/marginTop"

import { Paragraph } from "../../../../../atoms/Paragraph"
import { SyntaxHighlighter } from "../../../../../atoms/SyntaxHighlighter"
import { CODES } from "../../../constants/CODES"

import type { FC } from "react"

export const InCorrectExample: FC = () => (
  <Fragment>
    <Paragraph>
      Example of invalid ❌ code:
    </Paragraph>
    <div className={marginTop}>
      <SyntaxHighlighter
        code={CODES.INCORRECT_EXAMPLE1}
        language="javascript"
      />
    </div>
    <div className={marginTop}>
      <SyntaxHighlighter
        code={CODES.INCORRECT_EXAMPLE2}
        language="javascript"
      />
    </div>
  </Fragment>
)
