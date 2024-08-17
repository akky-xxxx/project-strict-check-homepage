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
    MATCH_NAMES_OF_FILE_AND_EXPORT: {
      PAGE_TITLE,
      OPTIONS,
      CAPTURES,
    },
  },
} = HEADINGS_INFO

export const EslintPluginSCJsRulesMatchNamesOfFileAndExport: FC = () => (
  <div>
    <Heading1 id={PAGE_TITLE.hash}>{PAGE_TITLE.name}</Heading1>
    <Paragraph>
      Match name of filename and export target.
      <br />
      Name that want to match is specified by capture of regular expression.
    </Paragraph>

    <Section>
      <Heading2 id={OPTIONS.hash}>{OPTIONS.name}</Heading2>
      <SyntaxHighlighter
        code={CODES.OPTIONS}
        language="javascript"
      />

      <Section>
        <Heading3 id={CAPTURES.hash}>{CAPTURES.name}</Heading3>
        <Paragraph>
          Specify the
          {" "}
          <Code>string array that be able to hands over to RegExp</Code>
          {" "}
          or
          {" "}
          <Code>regular expression array</Code>
          {" "}
          for allows path.
        </Paragraph>
        <Paragraph>
          values:
          <br />
          <Code>
            [&quot;/components/(?:atoms|molecules|organisms|templates)/([^/]+)/index.tsx&quot;]
          </Code>
          <br />
          or
          <br />
          <Code>
            [/\/components\/(?:atoms|molecules|organisms|templates)\/([^/]+)\/index\.tsx/]
          </Code>
        </Paragraph>
        <InCorrectExample />
        <CorrectExample />
      </Section>
    </Section>

    <EslintPluginSCJsRulesBackLinks />
  </div>
)
