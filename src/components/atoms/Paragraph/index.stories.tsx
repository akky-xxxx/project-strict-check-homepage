import { Paragraph } from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Paragraph> = {
  component: Paragraph,

  args: {
    children: "children",
  },
}

export default meta
type Story = StoryObj<typeof Paragraph>

export const Default: Story = {}
