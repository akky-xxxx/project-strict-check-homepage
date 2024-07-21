import { Installation } from "./components/atoms/Installation"
import { Setup } from "./components/atoms/Setup"
import { EslintConfigJestIntroduction } from "../../atoms/EslintConfigJestIntroduction"
import { Heading1 } from "../../atoms/Heading1"
import { Heading2 } from "../../atoms/Heading2"
import { Section } from "../../atoms/Section"

import type { FC } from "react"

export const EslintConfigSCJest: FC = () => (
  <div>
    <Heading1 id="package-name">eslint-config-sc-jest</Heading1>
    <EslintConfigJestIntroduction />

    <Section>
      <Heading2 id="usage">Usage</Heading2>
      <Section>
        <Installation />
      </Section>

      <Section>
        <Setup />
      </Section>
    </Section>
  </div>
)
