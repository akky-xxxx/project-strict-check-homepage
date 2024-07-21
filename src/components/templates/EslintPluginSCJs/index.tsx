import { pagesPath } from "@lib/$path"

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

export const EslintPluginSCJs: FC = () => (
  <div>
    <Heading1 id="package-name">eslint-plugin-sc-js</Heading1>
    <EslintPluginJavascriptIntroduction />

    <Section>
      <Heading2 id="usage">Usage</Heading2>
      <Section>
        <Installation />
      </Section>

      <Section>
        <Setup />
      </Section>

      <Section>
        <Heading3 id="rules">
          <Link href={pagesPath.packages.eslint_plugin_sc_js.rules.$url().path}>
            Rules
          </Link>
        </Heading3>
        <EslintPluginJsRules />
      </Section>
    </Section>
  </div>
)
