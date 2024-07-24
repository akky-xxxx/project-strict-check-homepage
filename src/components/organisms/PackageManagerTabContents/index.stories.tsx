import { expect, userEvent, within } from "@storybook/test"

import { STORY_PARAMETERS } from "@shared/constants/STORY_PARAMETERS"
import { sleep } from "@shared/utils/sleep"

import { PackageManagerTabContents } from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof PackageManagerTabContents> = {
  component: PackageManagerTabContents,

  args: {
    bun: "bun add -D eslint",
    npm: "npm i -D eslint",
    pnpm: "pnpm add -D eslint",
    yarn: "yarn add -D eslint ",
  },
}

export default meta
type Story = StoryObj<typeof PackageManagerTabContents>

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

export const DefaultShownContentsTest: Story = {
  tags: ["!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText("npm i -D eslint")).toBeInTheDocument()
  },
}

export const SwitchShownContentsTest: Story = {
  tags: ["!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const button1 = canvas.getByText("npm")
    const button2 = canvas.getByText("yarn")
    const button3 = canvas.getByText("pnpm")
    const button4 = canvas.getByText("bun")

    await sleep()
    await userEvent.click(button2)

    await expect(canvas.getByText("yarn add -D eslint")).toBeInTheDocument()

    await sleep()
    await userEvent.click(button3)

    await expect(canvas.getByText("pnpm add -D eslint")).toBeInTheDocument()

    await sleep()
    await userEvent.click(button4)

    await expect(canvas.getByText("bun add -D eslint")).toBeInTheDocument()

    await sleep()
    await userEvent.click(button1)

    await expect(canvas.getByText("npm i -D eslint")).toBeInTheDocument()
  },
}
