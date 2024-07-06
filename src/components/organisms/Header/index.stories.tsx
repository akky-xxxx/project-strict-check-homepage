import { Header } from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Header> = {
  component: Header,
}

export default meta
type Story = StoryObj<typeof Header>

export const Light: Story = {

  parameters: {
    backgrounds: {
      default: "light",
    },
  },
}

export const Dark: Story = {

  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
}
