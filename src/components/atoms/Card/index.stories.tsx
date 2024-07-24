import { expect, userEvent, within } from "@storybook/test"
import mockRouter from "next-router-mock"

import { STORY_PARAMETERS } from "@shared/constants/STORY_PARAMETERS"

import { Card } from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Card> = {
  component: Card,

  args: {
    title: "title string.".repeat(10),
    href: "/link-destination",
  },
  decorators: [
    (Story, context) => (
      <div style={{ padding: 10 }}>
        <Story {...context} />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Card>

export const Light: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.LIGHT,
  },
}

export const LightHasDescription: Story = {
  args: {
    description: "description string.".repeat(10),
  },
  parameters: {
    ...STORY_PARAMETERS.THEME.LIGHT,
  },
}

export const Dark: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.DARK,
  },
}

export const DarkHasDescription: Story = {
  args: {
    description: "description string.".repeat(10),
  },
  parameters: {
    ...STORY_PARAMETERS.THEME.DARK,
  },
}

export const ClickLinkTest: Story = {
  tags: ["!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getByText("title string.".repeat(10)))

    await expect(mockRouter).toMatchObject({ pathname: "/link-destination" })
  },
}
