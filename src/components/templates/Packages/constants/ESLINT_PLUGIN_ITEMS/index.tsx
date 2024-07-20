import { EslintPluginJavascriptIntroduction } from "../../components/atoms/EslintPluginJavascriptIntroduction"

import type { PackageItem } from "../../types/PackageItem"

export const ESLINT_PLUGIN_ITEMS = [
  {
    title: "eslint-plugin-sc-js",

    contents: <EslintPluginJavascriptIntroduction />,
  },
] as const satisfies PackageItem[]
