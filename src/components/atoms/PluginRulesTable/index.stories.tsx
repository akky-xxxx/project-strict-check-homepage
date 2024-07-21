import { expect, within } from "@storybook/test"

import { STORY_PARAMETERS } from "@shared/constants/STORY_PARAMETERS"

import { PluginRulesTable } from "."

import type { PluginRulesTableProps } from "./types/PluginRulesTableProps"
import type { Meta, StoryObj } from "@storybook/react"

const DATA = [
  [{ content: "rule-name1", key: "rule-name1" }, "description for rule-name1", true],
  [{ content: "rule-name2", key: "rule-name2" }, "description for rule-name2", false],
] satisfies PluginRulesTableProps["items"]

const meta: Meta<typeof PluginRulesTable> = {
  component: PluginRulesTable,

  args: {
    items: DATA,
  },
}

export default meta
type Story = StoryObj<typeof PluginRulesTable>

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

export const VisibilityTest: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.DARK,
  },
  tags: ["!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const thElements = [...canvas.getAllByRole("columnheader")]

    await expect(thElements.at(0)?.textContent).toBe("Name")
    await expect(thElements.at(1)?.textContent).toBe("Description")
    await expect(thElements.at(2)?.textContent).toBe("💼")

    const tdElements = [...canvas.getAllByRole("cell")]
    await expect(tdElements.at(0)?.textContent).toBe("rule-name1")
    await expect(tdElements.at(1)?.textContent).toBe("description for rule-name1")
    await expect(tdElements.at(2)?.textContent).toBe("✅")
    await expect(tdElements.at(3)?.textContent).toBe("rule-name2")
    await expect(tdElements.at(4)?.textContent).toBe("description for rule-name2")
    await expect(tdElements.at(5)?.textContent).toBe("")
  },
}
