import { FlatCompat } from "@eslint/eslintrc"
import eslintConfigSCAll from "eslint-config-sc-all"
import eslintPluginJsdoc from "eslint-plugin-jsdoc"
import pluginNextOnPages from "eslint-plugin-next-on-pages"
import eslintPluginSCJs from "eslint-plugin-sc-js"
import eslintPluginSonarjs from "eslint-plugin-sonarjs"
import globals from "globals"

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
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    // TODO: eslint-config-sc-ts@0.0.5 をリリースしたら不要になるので消す
    settings: {
      "import/resolver": {
        typescript: {},
      },
    },
  },
  eslintPluginJsdoc.configs["flat/recommended-typescript"],
  compat.config(pluginNextOnPages.configs.recommended),
  eslintPluginSonarjs.configs.recommended,
  eslintConfigSCAll.getConfigs("typescript", ["next", "jest", "storybook"]),

  ESLINT,
  PLUGIN_SC_JS,
  TYPESCRIPT_ESLINT,
  // TODO: eslint-config-sc-react@0.0.4 をリリースしたら不要になるので消す
  {
    rules: {
      "react/jsx-uses-react": 0,
      "react/react-in-jsx-scope": 0,
    },
  },
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
