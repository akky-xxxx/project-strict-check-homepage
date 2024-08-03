import { expect, userEvent, within } from "@storybook/test"
import mockRouter from "next-router-mock"
import { useState } from "react"

import { STORY_PARAMETERS } from "@shared/constants/STORY_PARAMETERS"
import { sleep } from "@shared/utils/sleep"

import { SearchModalBase } from "."

import type { Meta, StoryObj } from "@storybook/react"

export default {
  component: SearchModalBase,

  args: {
    isShown: true,
  },
} satisfies Meta<typeof SearchModalBase>

type Story = StoryObj<typeof SearchModalBase>

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

export const OpenAndCloseTest1: Story = {
  tags: ["!autodocs"],

  args: {
    isShown: false,
  },
  decorators: [
    (Story, context) => {
      const [isShown, setIsShown] = useState(false)
      const handleOpen = () => {
        setIsShown(true)
      }
      const handleClose = () => {
        setIsShown(false)
      }
      context.args = {
        ...context.args,
        isShown,
        handleCloseModal: handleClose,
      }

      return (
        <div>
          <button type="button" onClick={handleOpen}>Open</button>
          <Story {...context} />
        </div>
      )
    },
  ],
  parameters: {
    ...STORY_PARAMETERS.THEME.DARK,
    ...STORY_PARAMETERS.VIEWPORT.PC,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getByText("Open"))
    await sleep()
    await expect(canvas.getByPlaceholderText("Search")).toBeVisible()
    await expect(canvas.getByLabelText("Input search word")).toBeVisible()
    await expect(canvas.getByLabelText("Close search")).toBeVisible()
    await expect(canvas.getByLabelText("Input search word")).toBeVisible()
    await expect(canvas.getByLabelText("Reset search word")).toBeVisible()

    await userEvent.click(canvas.getByLabelText("Close search"))
    await sleep()
    await expect(canvas.getByPlaceholderText("Search")).not.toBeVisible()
    await expect(canvas.getByLabelText("Input search word")).not.toBeVisible()
    await expect(canvas.getByLabelText("Close search")).not.toBeVisible()
    await expect(canvas.getByLabelText("Input search word")).not.toBeVisible()
    await expect(canvas.getByLabelText("Reset search word")).not.toBeVisible()
  },
}

export const OpenAndCloseTest2: Story = {
  ...OpenAndCloseTest1,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getByText("Open"))
    await sleep()
    await userEvent.keyboard("{Esc}")
    await sleep()
    await expect(canvas.getByPlaceholderText("Search")).not.toBeVisible()
    await expect(canvas.getByLabelText("Input search word")).not.toBeVisible()
    await expect(canvas.getByLabelText("Close search")).not.toBeVisible()
    await expect(canvas.getByLabelText("Input search word")).not.toBeVisible()
    await expect(canvas.getByLabelText("Reset search word")).not.toBeVisible()
  },
}

export const InputAndResetTest: Story = {
  tags: ["!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await sleep()
    if (!canvas.getByLabelText<HTMLInputElement>("Reset search word").disabled) await userEvent.click(canvas.getByLabelText("Reset search word"))
    await sleep()
    await userEvent.click(canvas.getByLabelText("Input search word"))
    await userEvent.type(canvas.getByPlaceholderText("Search"), "eslint", { delay: 100 })
    await sleep()
    await expect(canvas.getAllByRole("listitem").at(0)).toBeVisible()

    await sleep()
    await userEvent.click(canvas.getByLabelText("Reset search word"))
    await sleep()
    await expect(canvas.getByRole("list").children).toHaveLength(0)
  },
}

export const InputAndSelectTest: Story = {
  tags: ["!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await sleep()
    if (!canvas.getByLabelText<HTMLInputElement>("Reset search word").disabled) await userEvent.click(canvas.getByLabelText("Reset search word"))
    await sleep()
    await userEvent.click(canvas.getByLabelText("Input search word"))
    await userEvent.type(canvas.getByPlaceholderText("Search"), "eslint", { delay: 100 })
    await sleep()
    await userEvent.keyboard("{Enter}")
    await sleep()
    await expect(mockRouter).toMatchObject({ pathname: "/packages/eslint-config-sc-all" })
  },
}
