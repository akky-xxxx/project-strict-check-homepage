import { expect, userEvent, within } from "@storybook/test"
import mockRouter from "next-router-mock"

import { STORY_PARAMETERS } from "@shared/constants/STORY_PARAMETERS"
import { sleep } from "@shared/utils/sleep"

import { PackageSelector } from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof PackageSelector> = {
  component: PackageSelector,

  args: {
    hasPackageSelector: true,
  },
}

export default meta
type Story = StoryObj<typeof PackageSelector>

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

export const CategoryListTest: Story = {
  tags: ["!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const optionElements = canvas.getAllByText("------")
    const categorySelect = optionElements.at(0)
    if (!categorySelect?.parentElement) return
    await expect(categorySelect.parentElement.childElementCount).toBe(3)
    await expect(categorySelect.parentElement.children.item(0)?.textContent).toBe("------")
    await expect(categorySelect.parentElement.children.item(1)?.textContent).toBe("config")
    await expect(categorySelect.parentElement.children.item(2)?.textContent).toBe("plugin")
  },
}

export const ChangeCategoryToConfigTest: Story = {
  tags: ["!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const optionElements = canvas.getAllByText("------")
    const categorySelect = optionElements.at(0)
    const targetSelect = optionElements.at(1)
    if (
      !categorySelect
      || !targetSelect
      || !categorySelect.parentElement
      || !targetSelect.parentElement
    ) return
    await userEvent.selectOptions(categorySelect.parentElement, "config")
    await expect(targetSelect.parentElement.childElementCount).toBe(8)
    await expect(targetSelect.parentElement.children.item(0)?.textContent).toBe("------")
    await expect(targetSelect.parentElement.children.item(1)?.textContent).toBe("all")
    await expect(targetSelect.parentElement.children.item(2)?.textContent).toBe("jest")
    await expect(targetSelect.parentElement.children.item(3)?.textContent).toBe("js")
    await expect(targetSelect.parentElement.children.item(4)?.textContent).toBe("next")
    await expect(targetSelect.parentElement.children.item(5)?.textContent).toBe("react")
    await expect(targetSelect.parentElement.children.item(6)?.textContent).toBe("storybook")
    await expect(targetSelect.parentElement.children.item(7)?.textContent).toBe("ts")
  },
}

export const ChangeCategoryToPluginTest: Story = {
  tags: ["!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const optionElements = canvas.getAllByText("------")
    const categorySelect = optionElements.at(0)
    const targetSelect = optionElements.at(1)
    if (
      !categorySelect
      || !targetSelect
      || !categorySelect.parentElement
      || !targetSelect.parentElement
    ) return
    await userEvent.selectOptions(categorySelect.parentElement, "plugin")
    await expect(targetSelect.parentElement.childElementCount).toBe(2)
    await expect(targetSelect.parentElement.children.item(0)?.textContent).toBe("------")
    await expect(targetSelect.parentElement.children.item(1)?.textContent).toBe("js")
  },
}

export const ClickTargetTest1: Story = {
  tags: ["!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const optionElements = canvas.getAllByText("------")
    const categorySelect = optionElements.at(0)
    const targetSelect = optionElements.at(1)
    if (
      !categorySelect
      || !targetSelect
      || !categorySelect.parentElement
      || !targetSelect.parentElement
    ) return
    await sleep()
    await userEvent.selectOptions(categorySelect.parentElement, "config")
    await sleep()
    await userEvent.selectOptions(targetSelect.parentElement, "all")
    await expect(mockRouter).toMatchObject({ pathname: "/eslint-config-all" })
  },
}

export const ClickTargetTest2: Story = {
  tags: ["!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const optionElements = canvas.getAllByText("------")
    const categorySelect = optionElements.at(0)
    const targetSelect = optionElements.at(1)
    if (
      !categorySelect
      || !targetSelect
      || !categorySelect.parentElement
      || !targetSelect.parentElement
    ) return
    await sleep()
    await userEvent.selectOptions(categorySelect.parentElement, "plugin")
    await sleep()
    await userEvent.selectOptions(targetSelect.parentElement, "js")
    await expect(mockRouter).toMatchObject({ pathname: "/eslint-plugin-js" })
  },
}
