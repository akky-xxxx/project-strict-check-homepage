import { Fragment } from "react"

import { marginTop } from "@shared/styles/marginTop"

import { Code } from "../../../../../atoms/Code"
import { Paragraph } from "../../../../../atoms/Paragraph"
import { SyntaxHighlighter } from "../../../../../atoms/SyntaxHighlighter"
import { CODES } from "../../../constants/CODES"

import type { FC } from "react"

export const InCorrectExample: FC = () => (
  <Fragment>
    <Paragraph>
      Example of invalid ❌ code when option value
      {" "}
      <Code>
        [/index(?:\.(?:stories|test))?\.tsx?/]
      </Code>
      :
    </Paragraph>
    <div className={marginTop}>
      <SyntaxHighlighter
        code={CODES.INCORRECT_EXAMPLE}
        language="javascript"
      />
    </div>
  </Fragment>
)
