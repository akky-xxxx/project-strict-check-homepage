export const SONARJS = [
  {
    files: ["**/*.{stories,test}.ts{,x}"],
    rules: {
      "sonarjs/no-duplicate-string": 0,
    },
  },
  {
    rules: {
      "sonarjs/no-misused-promises": 0, // @typescript-eslint/no-misused-promises と重複
      "sonarjs/todo-tag": 0, // 使う
    },
  },
]
