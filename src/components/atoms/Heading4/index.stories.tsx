import { expect, within } from "@storybook/test"

import { STORY_PARAMETERS } from "@shared/constants/STORY_PARAMETERS"

import { Heading4 } from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Heading4> = {
  component: Heading4,

  args: {
    children: "H4 text",
  },
}

export default meta
type Story = StoryObj<typeof Heading4>

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

export const ElementTest: Story = {
  tags: ["!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const HeadingElement = canvas.getByText("H4 text")

    await expect(HeadingElement).toBeInTheDocument()
    await expect(HeadingElement.nodeName).toBe("H4")
  },
}
