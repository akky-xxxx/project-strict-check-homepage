import { expect, within } from "@storybook/test"

import { STORY_PARAMETERS } from "@shared/constants/STORY_PARAMETERS"

import { EslintPluginSCJsRules } from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof EslintPluginSCJsRules> = {
  component: EslintPluginSCJsRules,
}

export default meta
type Story = StoryObj<typeof EslintPluginSCJsRules>

export const LightPc: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.LIGHT,
    ...STORY_PARAMETERS.VIEWPORT.PC,
  },
}

export const LightTb: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.LIGHT,
    ...STORY_PARAMETERS.VIEWPORT.TB,
  },
}

export const LightSp: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.LIGHT,
    ...STORY_PARAMETERS.VIEWPORT.SP,
  },
}

export const DarkPc: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.DARK,
    ...STORY_PARAMETERS.VIEWPORT.PC,
  },
}

export const DarkTb: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.DARK,
    ...STORY_PARAMETERS.VIEWPORT.TB,
  },
}

export const DarkSp: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.DARK,
    ...STORY_PARAMETERS.VIEWPORT.SP,
  },
}

export const IdAndHeadingTextTest: Story = {
  ...DarkPc,
  tags: ["!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const packageNameElement = canvas.getByText("Rules of eslint-plugin-sc-js")
    await expect(packageNameElement.getAttribute("id")).toBe("rules")
    await expect(packageNameElement.tagName).toBe("H1")
  },
}
