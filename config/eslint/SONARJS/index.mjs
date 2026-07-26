export const SONARJS = [
  {
    files: ["**/*.{stories,test}.ts{,x}"],
    rules: {
      "sonarjs/no-duplicate-string": 0,
    },
  },
  {
    // TypeScript 6 系で sonarjs の型情報ベース判定が壊れ、early return null パターンを誤検知する
    // https://github.com/SonarSource/eslint-plugin-sonarjs/issues (function-return-type)
    files: ["**/*.tsx"],
    rules: {
      "sonarjs/function-return-type": 0,
    },
  },
  {
    // TypeScript 6 系で sonarjs の型情報ベース判定が壊れ、expect() を検知できない
    // https://github.com/SonarSource/eslint-plugin-sonarjs/issues (assertions-in-tests)
    files: ["**/*.test.ts{,x}"],
    rules: {
      "sonarjs/assertions-in-tests": 0,
    },
  },
  {
    rules: {
      "sonarjs/no-misused-promises": 0, // @typescript-eslint/no-misused-promises と重複
      "sonarjs/todo-tag": 0, // 使う
    },
  },
]
