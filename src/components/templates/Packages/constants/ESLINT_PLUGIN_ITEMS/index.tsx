import { pagesPath } from "@lib/$path"

import { EslintPluginJavascriptIntroduction } from "../../../../atoms/EslintPluginJavascriptIntroduction"

import type { PackageItem } from "../../types/PackageItem"

export const ESLINT_PLUGIN_ITEMS = [
  {
    title: "eslint-plugin-sc-js",

    contents: <EslintPluginJavascriptIntroduction />,
    href: pagesPath.packages.eslint_plugin_sc_js.$url().path,
  },
] as const satisfies PackageItem[]
