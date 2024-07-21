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
  LEGACY1: `// .eslintrc.js
module.exports = {
  extends: ["sc-next/legacy"]
}

// Below is equal
const eslintConfigSCNext = require("eslint-config-sc-next")
const eslintConfigSCReact = require("eslint-config-sc-react")

module.exports = {
  extends: [
    "plugin:@next/next/core-web-vitals",
    "sc-react/legacy"
  ],
  plugins: ["@next/next"],
  rules: {
    ...eslintConfigSCReact.configs.customRecord.rules,
    ...eslintConfigSCNext.configs.nextRecord.rules,
    ...eslintConfigSCNext.configs.resetRecordForStylistic.rules,
  },
}`,
  LEGACY2: "// omission",
  LEGACY3: `// .eslintrc.js
const eslintConfigSCNext = require("eslint-config-sc-next")
const eslintConfigSCTs = require("eslint-config-sc-ts")

module.exports = {
  extends: [
    "plugin:@next/next/core-web-vitals",
    "sc-ts/legacy",
    "sc-react/legacy"
  ],
  plugins: ["@next/next"],
  rules: {
    ...eslintConfigSCNext.configs.nextRecord.rules,
    ...eslintConfigSCNext.configs.scRectCustomRecordWithTypescript.rules,
    ...eslintConfigSCNext.configs.resetRecordForStylistic.rules,
  },
}`,
}
