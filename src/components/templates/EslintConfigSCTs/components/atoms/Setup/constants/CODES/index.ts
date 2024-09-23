export const CODES = {
  FLAT1: `// eslint.config.mjs
import eslintConfigSCTs from "eslint-config-sc-ts"

export default [
  eslintConfigSCTs.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        project: "/path/to/tsconfig.json", // default, refer <root>/tsconfig.json
      },
    },
  },
].flat()`,
  FLAT2: `// eslint.config.mjs
import eslintConfigSCTs from "eslint-config-sc-ts"

export default [
  eslintConfigSCTs.configs.initialRecord,
  eslintConfigSCTs.configs.stylisticRecord,
  eslintConfigSCTs.configs.eslintRecommendedRecord,
  eslintConfigSCTs.configs.unicornRecommendedRecords,
  eslintConfigSCTs.configs.typescriptEslintStrictTypeCheckedRecords,
  eslintConfigSCTs.configs.typescriptEslintStylisticTypeCheckedRecords,

  // This use eslint-config-airbnb-base
  // For react project, this replace to eslint-config-airbnb
  eslintConfigSCTs.configs.airbnbBaseRecords,

  // This is the custom config of eslint-config-sc-js / eslint-config-sc-ts
  eslintConfigSCTs.configs.scJsCustomRecord,
  eslintConfigSCTs.configs.customRecord,

  // This is the reset config for stylistic
  eslintConfigSCTs.configs.resetRecordForStylistic,
  {
    languageOptions: {
      parserOptions: {
        project: "/path/to/tsconfig.json", // default, refer <root>/tsconfig.json
      },
    },
  },
].flat()`,
}
