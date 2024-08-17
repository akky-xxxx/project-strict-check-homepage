import { HEADINGS_INFO } from "@shared/constants/HEADINGS_INFO"

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

const {
  ESLINT_PLUGIN_SC_JS: {
    FILE_PATH_PATTERNS: {
      PAGE_TITLE,
      OPTIONS,
      ALLOW_PATTERNS,
    },
  },
} = HEADINGS_INFO

export const EslintPluginSCJsRulesFilePathPatterns: FC = () => (
  <div>
    <Heading1 id={PAGE_TITLE.hash}>{PAGE_TITLE.name}</Heading1>
    <Paragraph>
      Check if file path follows regular expression.
    </Paragraph>

    <Section>
      <Heading2 id={OPTIONS.hash}>{OPTIONS.name}</Heading2>
      <SyntaxHighlighter
        code={CODES.OPTIONS}
        language="javascript"
      />

      <Section>
        <Heading3 id={ALLOW_PATTERNS.hash}>{ALLOW_PATTERNS.name}</Heading3>
        <Paragraph>
          Specify the
          {" "}
          <Code>string array that be able to hands over to RegExp</Code>
          {" "}
          or
          {" "}
          <Code>regular expression array</Code>
          {" "}
          for allows path
        </Paragraph>
        <Paragraph>
          values:
          <br />
          <Code>
            [&quot;index(?:.(?:stories|test))?.tsx?&quot;]
          </Code>
          <br />
          or
          <br />
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
