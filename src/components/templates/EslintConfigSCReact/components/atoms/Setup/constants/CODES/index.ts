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
}
