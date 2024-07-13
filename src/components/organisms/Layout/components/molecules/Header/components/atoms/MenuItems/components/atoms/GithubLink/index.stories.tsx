import { expect, within } from "@storybook/test"

import { STORY_PARAMETERS } from "@shared/constants/STORY_PARAMETERS"

import { GithubLink } from "./index"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof GithubLink> = {
  component: GithubLink,

  args: {
    hasPackageSelector: true,
  },
}

export default meta
type Story = StoryObj<typeof GithubLink>

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

export const LinkAttributesTest: Story = {
  tags: ["!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const LinkElement = canvas.getByLabelText("Github")

    await expect(LinkElement).toBeInTheDocument()
    await expect(LinkElement.nodeName).toBe("A")
    await expect(LinkElement).toHaveAttribute("href", "https://github.com/akky-xxxx/strict-check")
    await expect(LinkElement).toHaveAttribute("target", "_blank")
    await expect(LinkElement).toHaveAttribute("rel", "noopener noreferrer")
  },
}
