import { STORY_PARAMETERS } from "@shared/constants/STORY_PARAMETERS"

import { Table } from "."

import type { TableProps } from "./types/TableProps"
import type { Meta, StoryObj } from "@storybook/react"

const DATA = [
  [{ content: "heading1", key: "heading1" }, { content: "heading2", key: "heading2" }, { content: "icon", key: "icons" }],
  [{ content: "body1-1", key: "body1-1" }, { content: "body2-1", key: "body2-1" }, { content: "", key: "body3-1" }],
  [{ content: "body1-2", key: "body1-2" }, { content: "body2-2", key: "body2-2" }, { content: "", key: "body3-1" }],
  [{ content: "body1-3", key: "body1-3" }, { content: "body2-3", key: "body2-3" }, { content: "", key: "body3-1" }],
  [{ content: "body1-4", key: "body1-4" }, { content: "body2-4", key: "body2-4" }, { content: "Icon", key: "body3-1" }],
] satisfies TableProps["items"]

const meta: Meta<typeof Table> = {
  component: Table,

  args: {
    items: DATA,
  },
}

export default meta
type Story = StoryObj<typeof Table>

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
