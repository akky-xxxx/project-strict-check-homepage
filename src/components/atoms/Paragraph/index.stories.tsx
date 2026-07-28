import { Paragraph } from "."

import type { Meta, StoryObj } from "@storybook/nextjs-vite"

const meta: Meta<typeof Paragraph> = {
  component: Paragraph,

  args: {
    children: "children",
  },
}

export default meta
type Story = StoryObj<typeof Paragraph>

export const Default: Story = {}
