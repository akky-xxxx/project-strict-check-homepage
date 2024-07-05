import { SiteName } from "."
import { STORY_PARAMETERS } from "../../../shared/constants/STORY_PARAMETERS"

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

export const Light: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.LIGHT,
  },
}

export const Dark: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.DARK,
  },
}
