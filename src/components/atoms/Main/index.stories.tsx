import { STORY_PARAMETERS } from "@shared/constants/STORY_PARAMETERS"

import { Main } from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Main> = {
  component: Main,

  args: {
    children: "children",
  },
}

export default meta
type Story = StoryObj<typeof Main>

export const Tb: Story = {
  parameters: {
    ...STORY_PARAMETERS.VIEWPORT.TB,
  },
}

export const Sp: Story = {
  parameters: {
    ...STORY_PARAMETERS.VIEWPORT.SP,
  },
}
