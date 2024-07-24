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

export const EslintPluginSCJsRulesRestrictUseOfProcessEnv: FC = () => (
  <div>
    <Heading1 id="rule-name">restrict-use-of-process-env</Heading1>
    <Paragraph>
      For the centralized manage the env.
    </Paragraph>

    <Section>
      <Heading2 id="rule-options">Rule options</Heading2>
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
