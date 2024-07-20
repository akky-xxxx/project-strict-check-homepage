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
