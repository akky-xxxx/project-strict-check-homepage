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
}
