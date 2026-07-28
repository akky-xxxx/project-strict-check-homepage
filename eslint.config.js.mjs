import eslintConfigSCAll from "eslint-config-sc-all"
import eslintPluginSCJs from "eslint-plugin-sc-js"
import globals from "globals"

import { IGNORES } from "./config/eslint/IGNORES/index.mjs"

const config = [
  IGNORES,
  {
    files: [
      "panda.config.ts",
      "**/*.{,c,m}js",
      "config/**/*.{,c,m}js",
    ],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    plugins: {
      "sc-js": eslintPluginSCJs,
    },
  },
  eslintConfigSCAll.getConfigs("javascript"),
  {
    rules: {
      "import/extensions": [
        2,
        {
          mjs: "require",
        },
      ],
      "import/no-extraneous-dependencies": 0,
      "import/no-unresolved": 0,
      "no-magic-numbers": 0,
      "sc-js/file-path-patterns": [
        2,
        {
          allowPatterns: [
            /index.m?js$/,
            /eslint\.config(?:\.js)?\.mjs/,
            /(?:commitlint|cspell|jest|next|panda|postcss|prettier)\.config\.[cm]?[jt]s/,
          ],
        },
      ],
    },
  },
  {
    files: ["{eslint,next,panda}.config.*"],
    rules: {
      "import/no-default-export": 0,
      "import/no-deprecated": 0,
      "import/no-named-as-default": 0,
      "import/no-named-as-default-member": 0,
    },
  },
].flat()

export default config
