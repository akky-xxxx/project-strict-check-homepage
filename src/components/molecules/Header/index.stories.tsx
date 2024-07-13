import { userEvent, within } from "@storybook/test"

import { STORY_PARAMETERS } from "@shared/constants/STORY_PARAMETERS"
import { sleep } from "@shared/utils/sleep"

import { Header } from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Header> = {
  component: Header,

  args: {
    hasPackageSelector: true,
  },
}

export default meta
type Story = StoryObj<typeof Header>

export const LightPcHasPackageSelector: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.LIGHT,
    ...STORY_PARAMETERS.VIEWPORTS.PC,
  },
}

export const LightTbHasPackageSelector: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.LIGHT,
    ...STORY_PARAMETERS.VIEWPORTS.TB,
  },
}

export const LightSpHasPackageSelector: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.LIGHT,
    ...STORY_PARAMETERS.VIEWPORTS.SP,
  },
}

export const DarkPcHasPackageSelector: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.DARK,
    ...STORY_PARAMETERS.VIEWPORTS.PC,
  },
}

export const DarkTbHasPackageSelector: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.DARK,
    ...STORY_PARAMETERS.VIEWPORTS.TB,
  },
}

export const DarkSpHasPackageSelector: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.DARK,
    ...STORY_PARAMETERS.VIEWPORTS.SP,
  },
}

export const LightPcNotHasPackageSelector: Story = {
  ...LightPcHasPackageSelector,
  args: {
    hasPackageSelector: false,
  },
}

export const LightTbNotHasPackageSelector: Story = {
  ...LightTbHasPackageSelector,
  args: {
    hasPackageSelector: false,
  },
}

export const LightSpNotHasPackageSelector: Story = {
  ...LightSpHasPackageSelector,
  args: {
    hasPackageSelector: false,
  },
}

export const DarkPcNotHasPackageSelector: Story = {
  ...DarkPcHasPackageSelector,
  args: {
    hasPackageSelector: false,
  },
}

export const DarkTbNotHasPackageSelector: Story = {
  ...DarkTbHasPackageSelector,
  args: {
    hasPackageSelector: false,
  },
}

export const DarkSpNotHasPackageSelector: Story = {
  ...DarkSpHasPackageSelector,
  args: {
    hasPackageSelector: false,
  },
}

export const OpenCloseMenuTest: Story = {
  ...DarkSpHasPackageSelector,
  tags: ["!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await sleep()
    await userEvent.click(canvas.getByLabelText("menu button"))
    await sleep()
    await userEvent.click(canvas.getByLabelText("Close the menu"))
  },
}
