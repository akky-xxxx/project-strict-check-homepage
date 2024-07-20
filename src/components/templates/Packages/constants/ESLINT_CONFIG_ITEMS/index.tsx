import { EslintConfigAllIntroduction } from "../../components/atoms/EslintConfigAllIntroduction"
import { EslintConfigJestIntroduction } from "../../components/atoms/EslintConfigJestIntroduction"
import { EslintConfigJsIntroduction } from "../../components/atoms/EslintConfigJsIntroduction"
import { EslintConfigNextIntroduction } from "../../components/atoms/EslintConfigNextIntroduction"
import { EslintConfigReactIntroduction } from "../../components/atoms/EslintConfigReactIntroduction"
import { EslintConfigStorybookIntroduction } from "../../components/atoms/EslintConfigStorybookIntroduction"
import { EslintConfigTsIntroduction } from "../../components/atoms/EslintConfigTsIntroduction"

import type { PackageItem } from "../../types/PackageItem"

export const ESLINT_CONFIG_ITEMS = [
  {
    title: "eslint-config-sc-all",

    contents: <EslintConfigAllIntroduction />,
  },
  {
    title: "eslint-config-sc-js",

    contents: <EslintConfigJsIntroduction />,
  },
  {
    title: "eslint-config-sc-ts",

    contents: <EslintConfigTsIntroduction />,
  },
  {
    title: "eslint-config-sc-jest",

    contents: <EslintConfigJestIntroduction />,
  },
  {
    title: "eslint-config-sc-react",

    contents: <EslintConfigReactIntroduction />,
  },
  {
    title: "eslint-config-sc-next",

    contents: <EslintConfigNextIntroduction />,
  },
  {
    title: "eslint-config-sc-storybook",

    contents: <EslintConfigStorybookIntroduction />,
  },
] as const satisfies PackageItem[]
