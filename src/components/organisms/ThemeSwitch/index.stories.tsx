import { userEvent, within, expect } from "@storybook/test"

import { ThemeSwitch } from "."
import { sleep } from "../../../shared/utils/sleep"

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ThemeSwitch> = {
  component: ThemeSwitch,
}

export default meta
type Story = StoryObj<typeof ThemeSwitch>

const ARIA_LABEL = "aria-label"

export const SystemButtonActive: Story = {
  args: {
    themeFromServerCookie: "system",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const systemThemeButton = [...canvas.getAllByRole("radio")]
      .find((radioButton) => radioButton.getAttribute(ARIA_LABEL) === "system theme")
    await expect(systemThemeButton).toBeChecked()
  },

  parameters: {
    backgrounds: {
      default: "system",
    },
  },
}

export const DarkButtonActive: Story = {
  args: {
    themeFromServerCookie: "dark",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const darkThemeButton = [...canvas.getAllByRole("radio")]
      .find((radioButton) => radioButton.getAttribute(ARIA_LABEL) === "dark theme")
    await expect(darkThemeButton).toBeChecked()
  },

  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
}

export const LightButtonActive: Story = {
  args: {
    themeFromServerCookie: "light",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const lightThemeButton = [...canvas.getAllByRole("radio")]
      .find((radioButton) => radioButton.getAttribute(ARIA_LABEL) === "light theme")
    await expect(lightThemeButton).toBeChecked()
  },

  parameters: {
    backgrounds: {
      default: "light",
    },
  },
}

export const ChangeTheme: Story = {
  ...SystemButtonActive,
  tags: ["!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await sleep()

    const darkThemeButton = [...canvas.getAllByRole("radio")]
      .find((radioButton) => radioButton.getAttribute(ARIA_LABEL) === "dark theme")
    if (!darkThemeButton) return
    await userEvent.click(darkThemeButton)
    await expect(darkThemeButton).toBeChecked()

    await sleep()

    const lightThemeButton = [...canvas.getAllByRole("radio")]
      .find((radioButton) => radioButton.getAttribute(ARIA_LABEL) === "light theme")
    if (!lightThemeButton) return
    await userEvent.click(lightThemeButton)
    await expect(lightThemeButton).toBeChecked()

    await sleep()

    const systemThemeButton = [...canvas.getAllByRole("radio")]
      .find((radioButton) => radioButton.getAttribute(ARIA_LABEL) === "system theme")
    if (!systemThemeButton) return
    await userEvent.click(systemThemeButton)
    await expect(systemThemeButton).toBeChecked()
  },
}
