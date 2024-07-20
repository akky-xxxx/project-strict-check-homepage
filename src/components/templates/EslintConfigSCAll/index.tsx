import { Arguments } from "./components/atoms/Arguments"
import { Installation } from "./components/atoms/Installation"
import { Setup } from "./components/atoms/Setup"
import { EslintConfigAllIntroduction } from "../../atoms/EslintConfigAllIntroduction"
import { Heading1 } from "../../atoms/Heading1"
import { Heading2 } from "../../atoms/Heading2"
import { Section } from "../../atoms/Section"

import type { FC } from "react"

export const EslintConfigSCAll: FC = () => (
  <div>
    <Heading1>eslint-config-sc-all</Heading1>
    <EslintConfigAllIntroduction />

    <Section>
      <Heading2>Usage</Heading2>
      <Section>
        <Installation />
      </Section>

      <Section>
        <Setup />

        <Section>
          <Arguments />
        </Section>
      </Section>
    </Section>
  </div>
)
