import { EslintConfigAll } from "../../components/atoms/EslintConfigAll"
import { EslintConfigJest } from "../../components/atoms/EslintConfigJest"
import { EslintConfigJs } from "../../components/atoms/EslintConfigJs"
import { EslintConfigNext } from "../../components/atoms/EslintConfigNext"
import { EslintConfigReact } from "../../components/atoms/EslintConfigReact"
import { EslintConfigStorybook } from "../../components/atoms/EslintConfigStorybook"
import { EslintConfigTs } from "../../components/atoms/EslintConfigTs"

import type { PackageItem } from "../../types/PackageItem"

export const ESLINT_CONFIG_ITEMS = [
  {
    title: "eslint-config-sc-all",

    contents: <EslintConfigAll />,
  },
  {
    title: "eslint-config-sc-js",

    contents: <EslintConfigJs />,
  },
  {
    title: "eslint-config-sc-ts",

    contents: <EslintConfigTs />,
  },
  {
    title: "eslint-config-sc-jest",

    contents: <EslintConfigJest />,
  },
  {
    title: "eslint-config-sc-react",

    contents: <EslintConfigReact />,
  },
  {
    title: "eslint-config-sc-next",

    contents: <EslintConfigNext />,
  },
  {
    title: "eslint-config-sc-storybook",

    contents: <EslintConfigStorybook />,
  },
] as const satisfies PackageItem[]
