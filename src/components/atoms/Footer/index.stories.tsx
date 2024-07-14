import { expect, within } from "@storybook/test"

import { Footer } from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Footer> = {
  component: Footer,
}

export default meta
type Story = StoryObj<typeof Footer>

export const Default: Story = {}

export const LinkDestinationTest: Story = {
  tags: ["!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const LinkElement = canvas.getByText("akky-xxxx")

    await expect(LinkElement).toBeInTheDocument()
    await expect(LinkElement.nodeName).toBe("A")
    await expect(LinkElement).toHaveAttribute("href", "https://github.com/akky-xxxx")
    await expect(LinkElement).toHaveAttribute("target", "_blank")
    await expect(LinkElement).toHaveAttribute("rel", "noopener noreferrer")
  },
}
