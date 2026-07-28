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
  eslintConfigSCNext.configs.eslintRecommendedRecord,
  eslintConfigSCNext.configs.unicornRecommendedRecords,
  eslintConfigSCNext.configs.reactRecords,
  eslintConfigSCNext.configs.nextRecord,
  eslintConfigSCNext.configs.airbnbRecords,

  // This is the custom config of eslint-config-sc-js / eslint-config-sc-next
  eslintConfigSCNext.configs.scJsCustomRecord,
  eslintConfigSCNext.configs.scRectCustomRecord,
].flat()`,
  FLAT3: `// eslint.config.mjs
import eslintConfigSCTs from "eslint-config-sc-ts"
import eslintConfigSCNext from "eslint-config-sc-next"

export default [
  eslintConfigSCNext.configs.initialRecord,
  eslintConfigSCNext.configs.eslintRecommendedRecord,
  eslintConfigSCTs.configs.typescriptEslintStrictTypeCheckedRecords,
  eslintConfigSCNext.configs.unicornRecommendedRecords,
  eslintConfigSCNext.configs.reactRecords,
  eslintConfigSCNext.configs.nextRecord,
  eslintConfigSCNext.configs.airbnbRecords,

  eslintConfigSCNext.configs.scJsCustomRecord,
  eslintConfigSCTs.configs.customRecord,
  eslintConfigSCNext.configs.scRectCustomRecord,
  eslintConfigSCNext.configs.scRectCustomRecordWithTypescript,
].flat()`,
}
