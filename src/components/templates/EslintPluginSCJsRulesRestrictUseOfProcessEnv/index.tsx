import { HEADINGS_INFO } from "@shared/constants/HEADINGS_INFO"

import { CorrectExample } from "./components/atoms/CorrectExample"
import { InCorrectExample } from "./components/atoms/InCorrectExample"
import { CODES } from "./constants/CODES"
import { EslintPluginSCJsRulesBackLinks } from "../../atoms/EslintPluginSCJsRulesBackLinks"
import { Heading1 } from "../../atoms/Heading1"
import { Heading2 } from "../../atoms/Heading2"
import { Paragraph } from "../../atoms/Paragraph"
import { Section } from "../../atoms/Section"
import { SyntaxHighlighter } from "../../atoms/SyntaxHighlighter"

import type { FC } from "react"

const {
  ESLINT_PLUGIN_SC_JS: {
    RESTRICT_USE_OF_PROCESS_ENV: {
      PAGE_TITLE,
      OPTIONS,
    },
  },
} = HEADINGS_INFO

export const EslintPluginSCJsRulesRestrictUseOfProcessEnv: FC = () => (
  <div>
    <Heading1 id={PAGE_TITLE.hash}>{PAGE_TITLE.name}</Heading1>
    <Paragraph>
      For the centralized manage the env.
    </Paragraph>

    <Section>
      <Heading2 id={OPTIONS.hash}>{OPTIONS.name}</Heading2>
      <SyntaxHighlighter
        code={CODES.OPTIONS}
        language="javascript"
      />
      <InCorrectExample />
      <CorrectExample />
    </Section>

    <EslintPluginSCJsRulesBackLinks />
  </div>
)
