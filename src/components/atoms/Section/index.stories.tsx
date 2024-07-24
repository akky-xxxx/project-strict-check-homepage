import { STORY_PARAMETERS } from "@shared/constants/STORY_PARAMETERS"

import { Section } from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Section> = {
  component: Section,

  args: {
    children: "children",
  },
  render: (props) => (
    <div style={{ padding: 10 }}>
      <Section {...props} />
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof Section>

export const Default: Story = {}

export const LightHasBorder: Story = {
  args: {
    hasBorder: true,
  },
  parameters: {
    ...STORY_PARAMETERS.THEME.LIGHT,
  },
}

export const DarkHasBorder: Story = {
  args: {
    hasBorder: true,
  },
  parameters: {
    ...STORY_PARAMETERS.THEME.DARK,
  },
}
