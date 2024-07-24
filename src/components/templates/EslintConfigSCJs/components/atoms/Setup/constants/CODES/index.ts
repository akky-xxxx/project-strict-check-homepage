export const CODES = {
  FLAT1: `// eslint.config.mjs
import eslintConfigSCJs from "eslint-config-sc-js"

export default [
  eslintConfigSCJs.configs.recommended,
].flat()`,
  FLAT2: `// eslint.config.mjs
import eslintConfigSCJs from "eslint-config-sc-js"

export default [
  eslintConfigSCJs.configs.initialRecord,
  eslintConfigSCJs.configs.stylisticRecord,
  eslintConfigSCJs.configs.eslintRecommendedRecord,
  eslintConfigSCJs.configs.unicornRecommendedRecords,

  // This use eslint-config-airbnb-base
  // For react project, this replace to eslint-config-airbnb
  eslintConfigSCJs.configs.airbnbBaseRecords,

  // This is the custom config of eslint-config-sc-js
  eslintConfigSCJs.configs.customRecord,

  // This is the reset config for @stylistic
  eslintConfigSCJs.configs.resetRecordForStylistic,
].flat()`,
  LEGACY1: `// .eslintrc.js
module.exports = {
  extends: ["sc-js/legacy"]
}`,
  LEGACY2: `// .eslintrc.js
const eslintConfigSCJs = require("eslint-config-sc-js")

module.exports = {
  extends: [
    "plugin:@stylistic/recommended-extends",
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "airbnb-base",
  ],
  plugins: ["unicorn"],
  rules: {
    ...eslintConfigSCJs.configs.customRecord.rules,
    ...eslintConfigSCJs.configs.resetRecordForStylistic.rules,
  },
}`,
}
