import { pagesPath } from "@lib/$path"

import { EslintConfigAllIntroduction } from "../../../../atoms/EslintConfigAllIntroduction"
import { EslintConfigJestIntroduction } from "../../../../atoms/EslintConfigJestIntroduction"
import { EslintConfigJsIntroduction } from "../../../../atoms/EslintConfigJsIntroduction"
import { EslintConfigNextIntroduction } from "../../../../atoms/EslintConfigNextIntroduction"
import { EslintConfigReactIntroduction } from "../../../../atoms/EslintConfigReactIntroduction"
import { EslintConfigStorybookIntroduction } from "../../../../atoms/EslintConfigStorybookIntroduction"
import { EslintConfigTsIntroduction } from "../../../../atoms/EslintConfigTsIntroduction"

import type { PackageItem } from "../../types/PackageItem"

export const ESLINT_CONFIG_ITEMS = [
  {
    title: "eslint-config-sc-all",

    contents: <EslintConfigAllIntroduction />,
    href: pagesPath.packages.eslint_config_sc_all.$url().path,
  },
  {
    title: "eslint-config-sc-js",

    contents: <EslintConfigJsIntroduction />,
    href: pagesPath.packages.eslint_config_sc_js.$url().path,
  },
  {
    title: "eslint-config-sc-ts",

    contents: <EslintConfigTsIntroduction />,
    href: pagesPath.packages.eslint_config_sc_ts.$url().path,
  },
  {
    title: "eslint-config-sc-jest",

    contents: <EslintConfigJestIntroduction />,
    href: pagesPath.packages.eslint_config_sc_jest.$url().path,
  },
  {
    title: "eslint-config-sc-react",

    contents: <EslintConfigReactIntroduction />,
    href: pagesPath.packages.eslint_config_sc_react.$url().path,
  },
  {
    title: "eslint-config-sc-next",

    contents: <EslintConfigNextIntroduction />,
    href: pagesPath.packages.eslint_config_sc_next.$url().path,
  },
  {
    title: "eslint-config-sc-storybook",

    contents: <EslintConfigStorybookIntroduction />,
    href: pagesPath.packages.eslint_config_sc_storybook.$url().path,
  },
] as const satisfies PackageItem[]
