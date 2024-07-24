import { Fragment } from "react"

import { marginTop } from "@shared/styles/marginTop"

import { Code } from "../../../../../atoms/Code"
import { Paragraph } from "../../../../../atoms/Paragraph"
import { SyntaxHighlighter } from "../../../../../atoms/SyntaxHighlighter"
import { CODES } from "../../../constants/CODES"

import type { FC } from "react"

export const CorrectExample: FC = () => (
  <Fragment>
    <Paragraph>
      Example of valid ⭕ code when option value
      {" "}
      <Code>
        [&quot;react&quot;]
      </Code>
      :
    </Paragraph>
    <div className={marginTop}>
      <SyntaxHighlighter
        code={CODES.CORRECT_EXAMPLE}
        language="javascript"
      />
    </div>
  </Fragment>
)
