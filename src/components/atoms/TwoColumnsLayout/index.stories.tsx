import { expect, userEvent, within } from "@storybook/test"

import { STORY_PARAMETERS } from "@shared/constants/STORY_PARAMETERS"
import { sleep } from "@shared/utils/sleep"

import { TowColumnsLayout } from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof TowColumnsLayout> = {
  component: TowColumnsLayout,

  args: {
    children: "children",
  },
}

export default meta
type Story = StoryObj<typeof TowColumnsLayout>

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

export const SideMenuVisibilityTest: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.DARK,
    ...STORY_PARAMETERS.VIEWPORT.TB,
  },
  tags: ["!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await sleep()

    await expect(canvas.getByText("Home")).toBeVisible()

    await sleep()
    await userEvent.click(canvas.getByLabelText("Toggle menu"))
    await expect(canvas.getByText("Home")).not.toBeVisible()
  },
}

// TODO: storybook 上は通るが cli 上でテストが通らない
// export const SpSideMenuHiddenTest: Story = {
//   parameters: {
//     ...STORY_PARAMETERS.THEME.DARK,
//     ...STORY_PARAMETERS.VIEWPORT.SP,
//   },
//   tags: ["!autodocs"],
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement)
//
//     await expect(canvas.getByLabelText("Toggle menu")).not.toBeVisible()
//     await expect(canvas.getByText("Home")).not.toBeVisible()
//   },
// }
