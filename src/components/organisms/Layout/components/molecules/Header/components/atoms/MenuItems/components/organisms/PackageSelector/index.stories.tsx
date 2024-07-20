import { expect, userEvent, within } from "@storybook/test"
import mockRouter from "next-router-mock"

import { STORY_PARAMETERS } from "@shared/constants/STORY_PARAMETERS"

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
    ...STORY_PARAMETERS.VIEWPORT.TB,
  },
}

export const LightSp: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.LIGHT,
    ...STORY_PARAMETERS.VIEWPORT.SP,
  },
}

export const DarkTb: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.DARK,
    ...STORY_PARAMETERS.VIEWPORT.TB,
  },
}

export const DarkSp: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.DARK,
    ...STORY_PARAMETERS.VIEWPORT.SP,
  },
}

export const PcChangingAndLinkDestinationTest: Story = {
  tags: ["!autodocs"],
  parameters: {
    ...STORY_PARAMETERS.VIEWPORT.PC,
  },
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

    const TEST_CASES = [
      { input: "sc-all", output: "/packages/eslint-config-sc-all" },
      { input: "sc-js", output: "/packages/eslint-config-sc-js" },
      { input: "sc-ts", output: "/packages/eslint-config-sc-ts" },
      { input: "sc-jest", output: "/packages/eslint-config-sc-jest" },
      { input: "sc-react", output: "/packages/eslint-config-sc-react" },
      { input: "sc-next", output: "/packages/eslint-config-sc-next" },
      { input: "sc-storybook", output: "/packages/eslint-config-sc-storybook" },
    ]
    await userEvent.selectOptions(categorySelect.parentElement, "config")
    // eslint-disable-next-line no-restricted-syntax
    for await (const testCase of TEST_CASES) {
      await userEvent.selectOptions(targetSelect.parentElement, testCase.input)
      await expect(mockRouter).toMatchObject({ pathname: testCase.output })
    }

    await userEvent.selectOptions(categorySelect.parentElement, "plugin")
    await userEvent.selectOptions(targetSelect.parentElement, "sc-js")
    await expect(mockRouter).toMatchObject({ pathname: "/packages/eslint-plugin-sc-js" })
  },
}

export const SpChangingAndLinkDestinationTest: Story = {
  tags: ["!autodocs"],
  parameters: {
    ...STORY_PARAMETERS.VIEWPORT.SP,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const optionElements = canvas.getAllByText("------")
    const optionElement = optionElements.at(2)

    if (!optionElement?.parentElement) return

    const TEST_CASES = [
      { input: "eslint-config-sc-all", output: "/packages/eslint-config-sc-all" },
      { input: "eslint-config-sc-js", output: "/packages/eslint-config-sc-js" },
      { input: "eslint-config-sc-ts", output: "/packages/eslint-config-sc-ts" },
      { input: "eslint-config-sc-jest", output: "/packages/eslint-config-sc-jest" },
      { input: "eslint-config-sc-react", output: "/packages/eslint-config-sc-react" },
      { input: "eslint-config-sc-next", output: "/packages/eslint-config-sc-next" },
      { input: "eslint-config-sc-storybook", output: "/packages/eslint-config-sc-storybook" },
      { input: "eslint-plugin-sc-js", output: "/packages/eslint-plugin-sc-js" },
    ]
    // eslint-disable-next-line no-restricted-syntax
    for await (const testCase of TEST_CASES) {
      await userEvent.selectOptions(optionElement.parentElement, testCase.input)
      await expect(mockRouter).toMatchObject({ pathname: testCase.output })
    }
  },
}
