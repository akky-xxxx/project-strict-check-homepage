import { expect, within } from "@storybook/test"

import { STORY_PARAMETERS } from "@shared/constants/STORY_PARAMETERS"

import { EslintPluginSCJsRulesMatchNamesOfFileAndExport } from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof EslintPluginSCJsRulesMatchNamesOfFileAndExport> = {
  component: EslintPluginSCJsRulesMatchNamesOfFileAndExport,
}

export default meta
type Story = StoryObj<typeof EslintPluginSCJsRulesMatchNamesOfFileAndExport>

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
    const packageNameElement = canvas.getByText("match-names-of-file-and-export")
    await expect(packageNameElement).toHaveAttribute("id", "rule-name")
    await expect(packageNameElement.tagName).toBe("H1")

    const usageElement = canvas.getByText("Rule Options")
    await expect(usageElement).toHaveAttribute("id", "rule-options")
    await expect(usageElement.tagName).toBe("H2")

    const installationElement = canvas.getByText("captures")
    await expect(installationElement).toHaveAttribute("id", "captures")
    await expect(installationElement.tagName).toBe("H3")
  },
}
