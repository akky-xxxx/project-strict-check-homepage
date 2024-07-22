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

export const EslintPluginSCJsRulesIndividualImport: FC = () => (
  <div>
    <Heading1 id="rule-name">individual-import</Heading1>
    <Paragraph>
      Import them individual.
    </Paragraph>

    <Section>
      <Heading2 id="rule-options">Rule options</Heading2>
      <SyntaxHighlighter
        code={CODES.OPTIONS}
        language="javascript"
      />

      <Section>
        <Heading3 id="targets">targets</Heading3>
        <Paragraph>
          Specify check target modules.
        </Paragraph>
        <Paragraph>
          value:
          {" "}
          <Code>
            [&quot;react&quot;]
          </Code>
        </Paragraph>
        <InCorrectExample />
        <CorrectExample />
      </Section>
    </Section>

    <EslintPluginSCJsRulesBackLinks />
  </div>
)
