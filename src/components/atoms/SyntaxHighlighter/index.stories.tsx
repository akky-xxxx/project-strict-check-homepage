import { STORY_PARAMETERS } from "@shared/constants/STORY_PARAMETERS"

import { SyntaxHighlighter } from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof SyntaxHighlighter> = {
  component: SyntaxHighlighter,
}

export default meta
type Story = StoryObj<typeof SyntaxHighlighter>

const SOURCE_OF_JAVASCRIPT = `// filename.ts
import plugin from "eslint-plugin"

const config = []

export default config`
const SOURCE_OF_SHELL = `$ npm install -D eslint;
$ npm install -D eslint-config-sc-all;
$ npm install -D eslint-plugin-sc-js;
$ echo 'test'`

export const LightJavascript: Story = {
  args: {
    code: SOURCE_OF_JAVASCRIPT,
    language: "javascript",
  },
  parameters: {
    ...STORY_PARAMETERS.THEME.LIGHT,
  },
}

export const DarkJavascript: Story = {
  args: {
    code: SOURCE_OF_JAVASCRIPT,
    language: "javascript",
  },
  parameters: {
    ...STORY_PARAMETERS.THEME.DARK,
  },
}

export const LightShell: Story = {
  args: {
    code: SOURCE_OF_SHELL,
    language: "shell",
  },
  parameters: {
    ...STORY_PARAMETERS.THEME.LIGHT,
  },
}

export const DarkShell: Story = {
  args: {
    code: SOURCE_OF_SHELL,
    language: "shell",
  },
  parameters: {
    ...STORY_PARAMETERS.THEME.DARK,
  },
}
