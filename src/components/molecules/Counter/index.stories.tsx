import { userEvent, within, expect } from "@storybook/test"

import { Counter } from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Counter> = {
  component: Counter,
}

export default meta
type Story = StoryObj<typeof Counter>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(
      canvas.getByText("count: 0"),
    ).toBeInTheDocument()
  },
}

export const Decrement: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // 👇 Simulate interactions with the component
    await userEvent.click(canvas.getByText("-"))

    // 👇 Assert DOM structure
    await expect(
      canvas.getByText("count: -1"),
    ).toBeInTheDocument()
  },
}

export const Increment: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // 👇 Simulate interactions with the component
    await userEvent.click(canvas.getByText("+"))

    // 👇 Assert DOM structure
    await expect(
      canvas.getByText("count: 1"),
    ).toBeInTheDocument()
  },
}
