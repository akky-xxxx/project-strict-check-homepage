export const IMPORT = [
  {
    files: ["src/config/panda/**/*.ts"],
    rules: {
      "import/no-extraneous-dependencies": 0,
    },
  },
  {
    files: ["src/app/{layout,not-found,page,template}.tsx", "src/app/**/{layout,page,template}.tsx"],
    rules: {
      "import/no-default-export": 0,
    },
  },
]
