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
  LEGACY1: `// .eslintrc.js
module.exports = {
  extends: ["sc-ts/legacy"]
}`,
  LEGACY2: `// .eslintrc.js
const eslintConfigSCTs = require("eslint-config-sc-ts")

module.exports = {
  extends: [
    "plugin:@stylistic/recommended-extends",
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:unicorn/recommended",
    "airbnb-base",
    "sc-js/legacy"
  ],
  plugins: ["unicorn"],
  rules: {
    ...eslintConfigSCTs.configs.customRecord.rules,
  },
}`,
}
