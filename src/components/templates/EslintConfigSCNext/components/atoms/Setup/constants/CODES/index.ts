export const CODES = {
  FLAT1: `// eslint.config.mjs
import eslintConfigSCNext from "eslint-config-sc-next"

export default [
  eslintConfigSCNext.configs.recommended,
].flat()`,
  FLAT2: `// eslint.config.mjs
import eslintConfigSCNext from "eslint-config-sc-next"

export default [
  eslintConfigSCNext.configs.initialRecord,
  eslintConfigSCNext.configs.stylisticRecord,
  eslintConfigSCNext.configs.eslintRecommendedRecord,
  eslintConfigSCNext.configs.unicornRecommendedRecords,
  eslintConfigSCNext.configs.reactRecords,
  eslintConfigSCNext.configs.nextRecords,
  eslintConfigSCNext.configs.airbnbRecords,

  // This is the custom config of eslint-config-sc-js / eslint-config-sc-next
  eslintConfigSCNext.configs.scJsCustomRecord,
  eslintConfigSCNext.configs.scRectCustomRecord,
  eslintConfigSCNext.configs.customRecordWithTypescript,

  // This is the reset config for stylistic
  eslintConfigSCNext.configs.resetRecordForStylistic,
].flat()`,
  FLAT3: `// eslint.config.mjs
import eslintConfigSCTs from "eslint-config-sc-ts"
import eslintConfigSCNext from "eslint-config-sc-next"

export default [
  eslintConfigSCNext.configs.initialRecord,
  eslintConfigSCNext.configs.stylisticRecord,
  eslintConfigSCNext.configs.eslintRecommendedRecord,
  eslintConfigSCTs.configs.typescriptEslintStrictTypeCheckedRecords,
  eslintConfigSCTs.configs.typescriptEslintStylisticTypeCheckedRecords,
  eslintConfigSCNext.configs.unicornRecommendedRecords,
  eslintConfigSCNext.configs.reactRecords,
  eslintConfigSCNext.configs.nextRecords,
  eslintConfigSCNext.configs.airbnbRecords,

  eslintConfigSCNext.configs.scJsCustomRecord,
  eslintConfigSCTs.configs.customRecords,
  eslintConfigSCNext.configs.customRecord,
  eslintConfigSCNext.configs.customRecordWithTypescript,

  // This is the reset config for stylistic
  eslintConfigSCNext.configs.resetRecordForStylistic,
].flat()`,
}
