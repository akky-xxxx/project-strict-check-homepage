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
        [/index(?:\.(?:stories|test))?\.tsx?/]
      </Code>
      :
    </Paragraph>
    <div className={marginTop}>
      <SyntaxHighlighter
        code={CODES.CORRECT_EXAMPLE1}
        language="javascript"
      />
    </div>
    <div className={marginTop}>
      <SyntaxHighlighter
        code={CODES.CORRECT_EXAMPLE2}
        language="javascript"
      />
    </div>
    <div className={marginTop}>
      <SyntaxHighlighter
        code={CODES.CORRECT_EXAMPLE3}
        language="javascript"
      />
    </div>
  </Fragment>
)
