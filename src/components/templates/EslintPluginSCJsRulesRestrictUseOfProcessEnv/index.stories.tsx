import { expect, within } from "@storybook/test"

import { STORY_PARAMETERS } from "@shared/constants/STORY_PARAMETERS"

import { EslintPluginSCJsRulesRestrictUseOfProcessEnv } from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof EslintPluginSCJsRulesRestrictUseOfProcessEnv> = {
  component: EslintPluginSCJsRulesRestrictUseOfProcessEnv,
}

export default meta
type Story = StoryObj<typeof EslintPluginSCJsRulesRestrictUseOfProcessEnv>

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
    const packageNameElement = canvas.getByText("restrict-use-of-process-env")
    await expect(packageNameElement.getAttribute("id")).toBe("rule-name")
    await expect(packageNameElement.tagName).toBe("H1")

    const usageElement = canvas.getByText("Rule Options")
    await expect(usageElement.getAttribute("id")).toBe("rule-options")
    await expect(usageElement.tagName).toBe("H2")
  },
}
