import { FlatCompat } from "@eslint/eslintrc"
import eslintConfigSCAll from "eslint-config-sc-all"
import eslintPluginJsdoc from "eslint-plugin-jsdoc"
import pluginNextOnPages from "eslint-plugin-next-on-pages"
import eslintPluginSonarjs from "eslint-plugin-sonarjs"

import { ESLINT } from "./config/eslint/ESLINT/index.mjs"
import { IGNORES } from "./config/eslint/IGNORES/index.mjs"
import { IMPORT } from "./config/eslint/IMPORT/index.mjs"
import { JSDOC } from "./config/eslint/JSDOC/index.mjs"
import { PLUGIN_SC_JS } from "./config/eslint/PLUGIN_SC_JS/index.mjs"
import { SONARJS } from "./config/eslint/SONARJS/index.mjs"
import { TYPESCRIPT_ESLINT } from "./config/eslint/TYPESCRIPT_ESLINT/index.mjs"

const compat = new FlatCompat()

/** @type {import("typescript-eslint").Config} */
const config = [
  IGNORES,

  eslintPluginJsdoc.configs["flat/recommended-typescript"],
  compat.config(pluginNextOnPages.configs.recommended),
  eslintPluginSonarjs.configs.recommended,
  eslintConfigSCAll.getConfigs("typescript", ["next", "jest", "storybook"]),

  ESLINT,
  PLUGIN_SC_JS,
  TYPESCRIPT_ESLINT,
  IMPORT,
  SONARJS,
  JSDOC,
].flat()

export default config
