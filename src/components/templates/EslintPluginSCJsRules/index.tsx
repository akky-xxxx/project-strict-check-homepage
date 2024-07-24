import { pagesPath } from "@lib/$path"

import { EslintPluginJsRules } from "../../atoms/EslintPluginJsRules"
import { Heading1 } from "../../atoms/Heading1"
import { Link } from "../../atoms/Link"
import { Paragraph } from "../../atoms/Paragraph"

import type { FC } from "react"

export const EslintPluginSCJsRules: FC = () => (
  <div>
    <Heading1 id="rules">Rules of eslint-plugin-sc-js</Heading1>
    <EslintPluginJsRules />

    <Paragraph>
      <Link href={pagesPath.packages.eslint_plugin_sc_js.$url().path}>
        back to eslint-plugin-sc-js top
      </Link>
    </Paragraph>
  </div>
)
