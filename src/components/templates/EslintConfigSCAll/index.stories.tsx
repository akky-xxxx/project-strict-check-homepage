import { expect, within } from "@storybook/test"

import { STORY_PARAMETERS } from "@shared/constants/STORY_PARAMETERS"

import { EslintConfigSCAll } from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof EslintConfigSCAll> = {
  component: EslintConfigSCAll,
}

export default meta
type Story = StoryObj<typeof EslintConfigSCAll>

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
    const packageNameElement = canvas.getByText("eslint-config-sc-all")
    await expect(packageNameElement).toHaveAttribute("id", "package-name")
    await expect(packageNameElement.tagName).toBe("H1")

    const usageElement = canvas.getByText("Usage")
    await expect(usageElement).toHaveAttribute("id", "usage")
    await expect(usageElement.tagName).toBe("H2")

    const installationElement = canvas.getByText("Installation")
    await expect(installationElement).toHaveAttribute("id", "installation")
    await expect(installationElement.tagName).toBe("H3")

    const setupElement = canvas.getByText("Setup")
    await expect(setupElement).toHaveAttribute("id", "setup")
    await expect(setupElement.tagName).toBe("H3")

    const argumentsElement = canvas.getByText("Arguments")
    await expect(argumentsElement).toHaveAttribute("id", "arguments")
    await expect(argumentsElement.tagName).toBe("H4")
  },
}
