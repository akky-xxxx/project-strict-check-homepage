export const CODES = {
  FLAT: `// eslint.config.mjs
import eslintPluginSCJs from "eslint-plugin-sc-js"

export default [
  {
    plugins: {
      "js": eslintPluginSCJs, // It is not necessary when use the recommended config
    },
  },
  eslintPluginSCJs.configs.recommended,
]`,
  LEGACY: `// .eslintrc.js
module.exports = {
  plugins: ["sc-js"], // It is not necessary when use the recommended config
  extends: [
    "plugin:sc-js/legacy"
  ],
  rules: {
    ...
  },
}`,
}
