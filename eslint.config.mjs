import { FlatCompat } from "@eslint/eslintrc"
import eslintConfigSCAll from "eslint-config-sc-all"
import eslintPluginJsdoc from "eslint-plugin-jsdoc"
import pluginNextOnPages from "eslint-plugin-next-on-pages"
import eslintPluginSCJs from "eslint-plugin-sc-js"
import eslintPluginSonarjs from "eslint-plugin-sonarjs"

import { ESLINT } from "./config/eslint/ESLINT/index.mjs"
import { IGNORES } from "./config/eslint/IGNORES/index.mjs"
import { PLUGIN_SC_JS } from "./config/eslint/PLUGIN_SC_JS/index.mjs"
import { TYPESCRIPT_ESLINT } from "./config/eslint/TYPESCRIPT_ESLINT/index.mjs"

const compat = new FlatCompat()

/** @type {import("typescript-eslint").Config} */
const config = [
  IGNORES,
  {
    plugins: {
      "sc-js": eslintPluginSCJs,
    },
  },
  eslintPluginJsdoc.configs["flat/recommended-typescript"],
  compat.config(pluginNextOnPages.configs.recommended),
  eslintPluginSonarjs.configs.recommended,
  eslintConfigSCAll.getConfigs("typescript", ["next", "jest", "storybook"]),

  ESLINT,
  PLUGIN_SC_JS,
  TYPESCRIPT_ESLINT,
  {
    files: ["src/config/panda/**/*.ts"],
    rules: {
      "import/no-extraneous-dependencies": 0,
    },
  },
  {
    files: ["**/*.stories.tsx"],
    rules: {
      "@typescript-eslint/naming-convention": 0,
      "sc-js/forbidden-multiple-named-exports": 0,
      "sonarjs/no-duplicate-string": 0,
    },
  },
  {
    rules: {
      "jsdoc/require-jsdoc": 0,
    },
  },
  {
    files: ["src/shared/**/*.ts{,x}"],
    rules: {
      "jsdoc/require-jsdoc": 2,
    },
  },
].flat()

export default config
