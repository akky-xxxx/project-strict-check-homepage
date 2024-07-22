import { CorrectExample } from "./components/atoms/CorrectExample"
import { InCorrectExample } from "./components/atoms/InCorrectExample"
import { CODES } from "./constants/CODES"
import { Code } from "../../atoms/Code"
import { EslintPluginSCJsRulesBackLinks } from "../../atoms/EslintPluginSCJsRulesBackLinks"
import { Heading1 } from "../../atoms/Heading1"
import { Heading2 } from "../../atoms/Heading2"
import { Heading3 } from "../../atoms/Heading3"
import { Paragraph } from "../../atoms/Paragraph"
import { Section } from "../../atoms/Section"
import { SyntaxHighlighter } from "../../atoms/SyntaxHighlighter"

import type { FC } from "react"

export const EslintPluginSCJsRulesFilePathPatterns: FC = () => (
  <div>
    <Heading1 id="rule-name">file-path-patterns</Heading1>
    <Paragraph>
      Check if file path follows regular expression.
    </Paragraph>

    <Section>
      <Heading2 id="rule-options">Rule options</Heading2>
      <SyntaxHighlighter
        code={CODES.OPTIONS}
        language="javascript"
      />

      <Section>
        <Heading3 id="allowPatterns">allowPatterns</Heading3>
        <Paragraph>
          Specify the regular expression array for allows path
        </Paragraph>
        <Paragraph>
          value:
          {" "}
          <Code>
            [/index(?:\.(?:stories|test))?\.tsx?/]
          </Code>
        </Paragraph>
        <InCorrectExample />
        <CorrectExample />
      </Section>
    </Section>

    <EslintPluginSCJsRulesBackLinks />
  </div>
)
