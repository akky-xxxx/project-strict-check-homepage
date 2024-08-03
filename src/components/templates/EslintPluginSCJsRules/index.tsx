import { pagesPath } from "@lib/$path"
import { HEADINGS_INFO } from "@shared/constants/HEADINGS_INFO"

import { EslintPluginJsRules } from "../../atoms/EslintPluginJsRules"
import { Heading1 } from "../../atoms/Heading1"
import { Link } from "../../atoms/Link"
import { Paragraph } from "../../atoms/Paragraph"

import type { FC } from "react"

const {
  ESLINT_PLUGIN_SC_JS: {
    RULES: {
      PAGE_TITLE,
    },
  },
} = HEADINGS_INFO

export const EslintPluginSCJsRules: FC = () => (
  <div>
    <Heading1 id={PAGE_TITLE.hash}>{PAGE_TITLE.name}</Heading1>
    <EslintPluginJsRules />

    <Paragraph>
      <Link href={pagesPath.packages.eslint_plugin_sc_js.$url().path}>
        back to eslint-plugin-sc-js top
      </Link>
    </Paragraph>
  </div>
)
