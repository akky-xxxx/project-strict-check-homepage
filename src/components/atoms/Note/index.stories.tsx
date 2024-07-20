import { STORY_PARAMETERS } from "@shared/constants/STORY_PARAMETERS"

import { Note } from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Note> = {
  component: Note,

  args: {
    children: "description value.".repeat(10),
  },
  decorators: [
    (Story, context) => (
      <div style={{ padding: 10 }}>
        <Story {...context} />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Note>

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
