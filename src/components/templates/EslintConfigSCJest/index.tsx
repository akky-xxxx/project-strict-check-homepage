import { HEADINGS_INFO } from "@shared/constants/HEADINGS_INFO"

import { Installation } from "./components/atoms/Installation"
import { Setup } from "./components/atoms/Setup"
import { EslintConfigJestIntroduction } from "../../atoms/EslintConfigJestIntroduction"
import { Heading1 } from "../../atoms/Heading1"
import { Heading2 } from "../../atoms/Heading2"
import { Section } from "../../atoms/Section"

import type { FC } from "react"

const {
  ESLINT_CONFIG_JEST: {
    HOME: {
      PAGE_TITLE,
      USAGE,
    },
  },
} = HEADINGS_INFO

export const EslintConfigSCJest: FC = () => (
  <div>
    <Heading1 id={PAGE_TITLE.hash}>{PAGE_TITLE.name}</Heading1>
    <EslintConfigJestIntroduction />

    <Section>
      <Heading2 id={USAGE.hash}>{USAGE.name}</Heading2>
      <Section>
        <Installation />
      </Section>

      <Section>
        <Setup />
      </Section>
    </Section>
  </div>
)
