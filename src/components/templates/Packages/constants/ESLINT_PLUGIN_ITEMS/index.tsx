import { EslintPluginJavascript } from "../../components/atoms/EslintPluginJavascript"

import type { PackageItem } from "../../types/PackageItem"

export const ESLINT_PLUGIN_ITEMS = [
  {
    title: "eslint-plugin-sc-js",

    contents: <EslintPluginJavascript />,
  },
] as const satisfies PackageItem[]
