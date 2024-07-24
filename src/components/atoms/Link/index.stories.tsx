import { expect, within } from "@storybook/test"

import { Link } from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Link> = {
  component: Link,

  args: {
    children: "link text",
    href: "/test",
  },
}

export default meta
type Story = StoryObj<typeof Link>

export const Default: Story = {}

export const InternalLinkTest: Story = {
  tags: ["!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const LinkElement = canvas.getByText("link text")

    await expect(LinkElement).toBeInTheDocument()
    await expect(LinkElement).toHaveAttribute("href", "/test")
    await expect(LinkElement).not.toHaveAttribute("target", "_blank")
    await expect(LinkElement).not.toHaveAttribute("rel", "noopener noreferrer")
  },
}

export const ExternalLinkTest: Story = {
  tags: ["!autodocs"],

  args: {
    href: "http",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const LinkElement = canvas.getByText("link text")

    await expect(LinkElement).toBeInTheDocument()
    await expect(LinkElement).toHaveAttribute("href", "http")
    await expect(LinkElement).toHaveAttribute("target", "_blank")
    await expect(LinkElement).toHaveAttribute("rel", "noopener noreferrer")
  },
}
