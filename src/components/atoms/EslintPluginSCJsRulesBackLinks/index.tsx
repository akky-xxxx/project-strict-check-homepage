import { Fragment } from "react"

import { pagesPath } from "@lib/$path"

import { Link } from "../Link"
import { Paragraph } from "../Paragraph"

import type { FC } from "react"

export const EslintPluginSCJsRulesBackLinks: FC = () => (
  <Fragment>
    <Paragraph>
      <Link href={pagesPath.packages.eslint_plugin_sc_js.rules.$url().path}>
        back to rules of eslint-plugin-sc-js
      </Link>
    </Paragraph>

    <Paragraph>
      <Link href={pagesPath.packages.eslint_plugin_sc_js.$url().path}>
        back to eslint-plugin-sc-js top
      </Link>
    </Paragraph>
  </Fragment>
)
