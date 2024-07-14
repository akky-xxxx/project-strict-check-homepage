import { expect, userEvent, within } from "@storybook/test"

import { STORY_PARAMETERS } from "@shared/constants/STORY_PARAMETERS"
import { sleep } from "@shared/utils/sleep"

import { EslintConfigTabContents } from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof EslintConfigTabContents> = {
  component: EslintConfigTabContents,

  args: {
    flatCode: "export default []",
    legacyCode: "module.exports = {}",
  },
}

export default meta
type Story = StoryObj<typeof EslintConfigTabContents>

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

export const DefaultShownContentsTest: Story = {
  tags: ["!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText("export")).toBeInTheDocument()
    await expect(canvas.getByText("default")).toBeInTheDocument()
    await expect(canvas.getByText("[]")).toBeInTheDocument()
  },
}

export const SwitchShownContentsTest: Story = {
  tags: ["!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const button1 = canvas.getByText("flat")
    const button2 = canvas.getByText("legacy")

    await sleep()
    await userEvent.click(button2)

    await expect(canvas.getByText("module")).toBeInTheDocument()
    await expect(canvas.getByText(".exports = {}")).toBeInTheDocument()

    await sleep()
    await userEvent.click(button1)

    await expect(canvas.getByText("export")).toBeInTheDocument()
    await expect(canvas.getByText("default")).toBeInTheDocument()
    await expect(canvas.getByText("[]")).toBeInTheDocument()
  },
}
