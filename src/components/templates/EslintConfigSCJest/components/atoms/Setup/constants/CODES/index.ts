export const CODES = {
  FLAT1: `// eslint.config.mjs
import eslintConfigSCJest from "eslint-config-sc-jest"

export default [
  [/* other rules for product code */],
  eslintConfigSCJest.configs.recommended,
].flat()`,
  FLAT2: `// eslint.config.mjs
import eslintConfigSCJest from "eslint-config-sc-jest"

export default [
  [/* other rules for product code */],
  eslintConfigSCJest.configs.jestPluginRecords,
  eslintConfigSCJest.configs.customRecord,
  eslintConfigSCJest.configs.overrideJavascriptRecord, // for javascript project
  eslintConfigSCJest.configs.overrideTypescriptRecord, // for typescript project
].flat()`,
  LEGACY1: `// .eslintrc.js
module.exports = {
  extends: [
    "...", // other extends for product code
    "sc-jest/legacy",
  ]
}`,
  LEGACY2: `// .eslintrc.js
const eslintConfigSCJest = require("eslint-config-sc-jest")

module.exports = {
  extends: [
    "...", // other extends for product code
  ],
  plugins: ["jest"],
  overrides: [
    ...[/* other overrides */],
    ...eslintConfigSCJest.configs.legacy.overrides,
  ],
}`,
}
