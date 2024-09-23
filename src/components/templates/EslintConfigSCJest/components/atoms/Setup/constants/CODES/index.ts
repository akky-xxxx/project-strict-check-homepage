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
}
