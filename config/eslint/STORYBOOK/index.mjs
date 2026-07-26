import eslintPluginStorybook from "eslint-plugin-storybook"

const STORY_FILES = ["**/{story,stories}/**", "**/*.{story,stories}.*"]

export const STORYBOOK = [
  ...eslintPluginStorybook.configs["flat/recommended"],
  {
    files: STORY_FILES,
    rules: {
      "storybook/no-stories-of": 2,
      "storybook/no-title-property-in-meta": 2,
    },
  },
  {
    files: STORY_FILES,
    rules: {
      "@typescript-eslint/no-magic-numbers": 0,
      complexity: 0,
      "import/no-default-export": 0,
      "import/no-extraneous-dependencies": 0,
      "max-lines": [1, 200],
      "max-nested-callbacks": [2, 5],
      "max-statements": [2, 30],
      "no-console": 0,
      "no-magic-numbers": 0,
      "no-undefined": 0,
      "sort-keys": 0,
    },
  },
]
