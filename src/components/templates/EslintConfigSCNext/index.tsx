import { Installation } from "./components/atoms/Installation"
import { Setup } from "./components/atoms/Setup"
import { EslintConfigNextIntroduction } from "../../atoms/EslintConfigNextIntroduction"
import { Heading1 } from "../../atoms/Heading1"
import { Heading2 } from "../../atoms/Heading2"
import { Section } from "../../atoms/Section"

import type { FC } from "react"

export const EslintConfigSCNext: FC = () => (
  <div>
    <Heading1 id="package-name">eslint-config-sc-next</Heading1>
    <EslintConfigNextIntroduction />

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
