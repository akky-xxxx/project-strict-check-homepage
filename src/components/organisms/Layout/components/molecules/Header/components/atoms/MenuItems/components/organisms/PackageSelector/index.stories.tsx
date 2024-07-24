import { expect, userEvent, within } from "@storybook/test"
import mockRouter from "next-router-mock"

import { pagesPath } from "@lib/$path"
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

// 実装側で遷移先の url を動的に生成してるため、テスト側で pathpida を使うことにより値を担保させる
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
      { input: "sc-all", output: pagesPath.packages.eslint_config_sc_all.$url().path },
      { input: "sc-js", output: pagesPath.packages.eslint_config_sc_js.$url().path },
      { input: "sc-ts", output: pagesPath.packages.eslint_config_sc_ts.$url().path },
      { input: "sc-jest", output: pagesPath.packages.eslint_config_sc_jest.$url().path },
      { input: "sc-react", output: pagesPath.packages.eslint_config_sc_react.$url().path },
      { input: "sc-next", output: pagesPath.packages.eslint_config_sc_next.$url().path },
      { input: "sc-storybook", output: pagesPath.packages.eslint_config_sc_storybook.$url().path },
    ]
    await userEvent.selectOptions(categorySelect.parentElement, "config")
    // eslint-disable-next-line no-restricted-syntax
    for await (const testCase of TEST_CASES) {
      await userEvent.selectOptions(targetSelect.parentElement, testCase.input)
      await expect(mockRouter).toMatchObject({ pathname: testCase.output })
    }

    await userEvent.selectOptions(categorySelect.parentElement, "plugin")
    await userEvent.selectOptions(targetSelect.parentElement, "sc-js")
    await expect(mockRouter).toMatchObject(
      { pathname: pagesPath.packages.eslint_plugin_sc_js.$url().path },
    )
  },
}

// 実装側で遷移先の url を動的に生成してるため、テスト側で pathpida を使うことにより値を担保させる
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
      { input: "eslint-config-sc-all", output: pagesPath.packages.eslint_config_sc_all.$url().path },
      { input: "eslint-config-sc-js", output: pagesPath.packages.eslint_config_sc_js.$url().path },
      { input: "eslint-config-sc-ts", output: pagesPath.packages.eslint_config_sc_ts.$url().path },
      { input: "eslint-config-sc-jest", output: pagesPath.packages.eslint_config_sc_jest.$url().path },
      { input: "eslint-config-sc-react", output: pagesPath.packages.eslint_config_sc_react.$url().path },
      { input: "eslint-config-sc-next", output: pagesPath.packages.eslint_config_sc_next.$url().path },
      { input: "eslint-config-sc-storybook", output: pagesPath.packages.eslint_config_sc_storybook.$url().path },
      { input: "eslint-plugin-sc-js", output: pagesPath.packages.eslint_plugin_sc_js.$url().path },
    ]
    // eslint-disable-next-line no-restricted-syntax
    for await (const testCase of TEST_CASES) {
      await userEvent.selectOptions(optionElement.parentElement, testCase.input)
      await expect(mockRouter).toMatchObject({ pathname: testCase.output })
    }
  },
}
