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
    INDIVIDUAL_IMPORT: {
      PAGE_TITLE,
      OPTIONS,
      TARGETS,
    },
  },
} = HEADINGS_INFO

export const EslintPluginSCJsRulesIndividualImport: FC = () => (
  <div>
    <Heading1 id={PAGE_TITLE.hash}>{PAGE_TITLE.name}</Heading1>
    <Paragraph>
      Import them individual.
    </Paragraph>

    <Section>
      <Heading2 id={OPTIONS.hash}>{OPTIONS.name}</Heading2>
      <SyntaxHighlighter
        code={CODES.OPTIONS}
        language="javascript"
      />

      <Section>
        <Heading3 id={TARGETS.hash}>{TARGETS.name}</Heading3>
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
