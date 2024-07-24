import { expect, within } from "@storybook/test"

import { STORY_PARAMETERS } from "@shared/constants/STORY_PARAMETERS"

import { EslintPluginJsRules } from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof EslintPluginJsRules> = {
  component: EslintPluginJsRules,
}

export default meta
type Story = StoryObj<typeof EslintPluginJsRules>

export const Light: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.LIGHT,
    ...STORY_PARAMETERS.VIEWPORT.PC,
  },
}

export const Dark: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.DARK,
    ...STORY_PARAMETERS.VIEWPORT.PC,
  },
}

export const VisibilityTest: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.DARK,
    ...STORY_PARAMETERS.VIEWPORT.PC,
  },
  tags: ["!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const tdElements = [...canvas.getAllByRole("cell")]
    // TODO: リンクを指定したらリンクのテストも追加
    await expect(tdElements.at(0)?.textContent).toBe("file-path-patterns")
    await expect(tdElements.at(1)?.textContent).toBe("Check if file path follows regular expression")
    await expect(tdElements.at(2)?.textContent).toBe("")
    await expect(tdElements.at(3)?.textContent).toBe("forbidden-multiple-named-exports")
    await expect(tdElements.at(4)?.textContent).toBe("Forbidden the multiple named exports at one file")
    await expect(tdElements.at(5)?.textContent).toBe("")
    await expect(tdElements.at(6)?.textContent).toBe("individual-import")
    await expect(tdElements.at(7)?.textContent).toBe("Import them individual")
    await expect(tdElements.at(8)?.textContent).toBe("")
    await expect(tdElements.at(9)?.textContent).toBe("match-names-of-file-and-export")
    await expect(tdElements.at(10)?.textContent).toBe("Match name of filename and export target")
    await expect(tdElements.at(11)?.textContent).toBe("")
    await expect(tdElements.at(12)?.textContent).toBe("restrict-use-of-process-env")
    await expect(tdElements.at(13)?.textContent).toBe("Restrict environment usage")
    await expect(tdElements.at(14)?.textContent).toBe("✅")
  },
}
