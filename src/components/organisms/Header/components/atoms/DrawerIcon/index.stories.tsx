import { STORY_PARAMETERS } from "@shared/constants/STORY_PARAMETERS"

import { DrawerIcon } from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof DrawerIcon> = {
  component: DrawerIcon,

  args: {
    isOpened: false,
  },
}

export default meta
type Story = StoryObj<typeof DrawerIcon>

export const ClosedLight: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.LIGHT,
  },
}

export const OpenedLight: Story = {
  args: {
    isOpened: true,
  },
  parameters: {
    ...STORY_PARAMETERS.THEME.LIGHT,
  },
}

export const ClosedDark: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.DARK,
  },
}

export const OpenedDark: Story = {
  args: {
    isOpened: true,
  },
  parameters: {
    ...STORY_PARAMETERS.THEME.DARK,
  },
}
