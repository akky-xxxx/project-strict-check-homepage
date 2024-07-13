import { expect, within } from "@storybook/test"

import { STORY_PARAMETERS } from "@shared/constants/STORY_PARAMETERS"

import { Heading2 } from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Heading2> = {
  component: Heading2,

  args: {
    children: "H2 text",
  },
}

export default meta
type Story = StoryObj<typeof Heading2>

export const LightTb: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.LIGHT,
    ...STORY_PARAMETERS.VIEWPORTS.TB,
  },
}

export const LightSp: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.LIGHT,
    ...STORY_PARAMETERS.VIEWPORTS.SP,
  },
}

export const DarkTb: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.DARK,
    ...STORY_PARAMETERS.VIEWPORTS.TB,
  },
}

export const DarkSp: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.DARK,
    ...STORY_PARAMETERS.VIEWPORTS.SP,
  },
}

export const ElementTest: Story = {
  tags: ["!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const HeadingElement = canvas.getByText("H2 text")

    await expect(HeadingElement).toBeInTheDocument()
    await expect(HeadingElement.nodeName).toBe("H2")
  },
}
