export const CODES = {
  FLAT1: `// eslint.config.mjs
import eslintConfigSCReact from "eslint-config-sc-react"

export default [
  ...eslintConfigSCReact.configs.recommended,
]`,
  FLAT2: `// eslint.config.mjs
import eslintConfigSCReact from "eslint-config-sc-react"

export default [
  eslintConfigSCReact.configs.initialRecord,
  eslintConfigSCReact.configs.stylisticRecord,
  eslintConfigSCReact.configs.eslintRecommendedRecord,
  eslintConfigSCReact.configs.unicornRecommendedRecords,
  eslintConfigSCReact.configs.reactRecords,
  eslintConfigSCReact.configs.airbnbRecords,

  // This is the custom config of eslint-config-sc-js / eslint-config-sc-react
  eslintConfigSCReact.configs.scJsCustomRecord,
  eslintConfigSCReact.configs.customRecord,

  // This is the reset config for stylistic
  eslintConfigSCReact.configs.resetRecordForStylistic,
].flat()`,
  FLAT3: `// eslint.config.mjs
import eslintConfigSCTs from "eslint-config-sc-ts"
import eslintConfigSCReact from "eslint-config-sc-react"

export default [
  eslintConfigSCReact.configs.initialRecord,
  eslintConfigSCReact.configs.stylisticRecord,
  eslintConfigSCReact.configs.eslintRecommendedRecord,
  eslintConfigSCReact.configs.unicornRecommendedRecords,
  eslintConfigSCTs.configs.typescriptEslintStrictTypeCheckedRecords,
  eslintConfigSCTs.configs.typescriptEslintStylisticTypeCheckedRecords,
  eslintConfigSCReact.configs.reactRecords,
  eslintConfigSCReact.configs.airbnbRecords,

  // This is the custom config of eslint-config-sc-js / eslint-config-sc-react
  eslintConfigSCReact.configs.scJsCustomRecord,
  eslintConfigSCReact.configs.customRecord,
  eslintConfigSCReact.configs.customRecordWithTypescript,

  // This is the reset config for stylistic
  eslintConfigSCReact.configs.resetRecordForStylistic,
].flat()`,
  LEGACY1: `// .eslintrc.js
module.exports = {
  extends: ["sc-react/legacy"]
}`,
  LEGACY2: `// .eslintrc.js
const eslintConfigSCReact = require("eslint-config-sc-react")

module.exports = {
  extends: [
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "sc-js/legacy"
  ],
  rules: {
    ...eslintConfigSCReact.configs.customRecord.rules,
  },
}`,
  LEGACY3: `// .eslintrc.js
const eslintConfigSCReact = require("eslint-config-sc-react")
const eslintConfigSCTs = require("eslint-config-sc-ts")

module.exports = {
  extends: [
    "plugin:unicorn/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "sc-ts/legacy"
  ],
  rules: {
    ...eslintConfigSCTs.configs.customRecord.rules,
    ...eslintConfigSCReact.configs.customRecord.rules,
    ...eslintConfigSCReact.configs.customRecordWithTypescript.rules,  // This is the custom config for typescript of eslint-config-sc-react
    ...eslintConfigSCReact.configs.resetRecordForStylistic.rules,
  },
}`,
}
