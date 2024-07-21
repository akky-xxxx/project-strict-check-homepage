export const CODES = {
  FLAT1: `// eslint.config.mjs
import eslintConfigSCStorybook from "eslint-config-sc-storybook"

export default [
  [/* other rules for product code */],
  eslintConfigSCStorybook.configs.recommended,
].flat()`,
  FLAT2: `// eslint.config.mjs
import eslintConfigSCStorybook from "eslint-config-sc-storybook"

export default [
  [/* other rules for product code */],
  eslintConfigSCStorybook.configs.storybookConfigRecords,
  eslintConfigSCStorybook.configs.overrideJavascriptRecord, // for javascript project
  eslintConfigSCStorybook.configs.overrideTypescriptRecord, // for typescript project
].flat()`,
  LEGACY1: `// .eslintrc.js
module.exports = {
  extends: [
    "...", // other extends for product code
    "sc-storybook/legacy",
  ]
}`,
  LEGACY2: `// .eslintrc.js
const eslintConfigSCStorybook = require("eslint-config-sc-storybook")

module.exports = {
  extends: [
    "...", // other extends for product code
  ],
  plugins: ["storybook"],
  overrides: [
    ...[/* other overrides */],
    ...eslintConfigSCStorybook.configs.legacy.overrides,
  ],
}`,
}
