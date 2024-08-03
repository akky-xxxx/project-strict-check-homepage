import { pagesPath } from "@lib/$path"
import { HEADINGS_INFO } from "@shared/constants/HEADINGS_INFO"

import { Installation } from "./components/atoms/Installation"
import { Setup } from "./components/atoms/Setup"
import { EslintPluginJavascriptIntroduction } from "../../atoms/EslintPluginJavascriptIntroduction"
import { EslintPluginJsRules } from "../../atoms/EslintPluginJsRules"
import { Heading1 } from "../../atoms/Heading1"
import { Heading2 } from "../../atoms/Heading2"
import { Heading3 } from "../../atoms/Heading3"
import { Link } from "../../atoms/Link"
import { Section } from "../../atoms/Section"

import type { FC } from "react"

const {
  ESLINT_PLUGIN_SC_JS: {
    HOME: {
      PAGE_TITLE,
      USAGE,
      RULES,
    },
  },
} = HEADINGS_INFO

export const EslintPluginSCJs: FC = () => (
  <div>
    <Heading1 id={PAGE_TITLE.hash}>{PAGE_TITLE.name}</Heading1>
    <EslintPluginJavascriptIntroduction />

    <Section>
      <Heading2 id={USAGE.hash}>{USAGE.name}</Heading2>
      <Section>
        <Installation />
      </Section>

      <Section>
        <Setup />
      </Section>

      <Section>
        <Heading3 id={RULES.hash}>
          <Link href={pagesPath.packages.eslint_plugin_sc_js.rules.$url().path}>
            {RULES.name}
          </Link>
        </Heading3>
        <EslintPluginJsRules />
      </Section>
    </Section>
  </div>
)
