import { STORY_PARAMETERS } from "@shared/constants/STORY_PARAMETERS"

import { SiteName } from "./index"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof SiteName> = {
  component: SiteName,

  parameters: {
    viewports: {
      defaultViewport: "pc",
    },
  },
}

export default meta
type Story = StoryObj<typeof SiteName>

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
