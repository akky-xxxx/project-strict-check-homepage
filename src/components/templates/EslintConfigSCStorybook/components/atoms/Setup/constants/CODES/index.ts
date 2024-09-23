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
}
