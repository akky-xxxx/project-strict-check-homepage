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

export const SystemTheme: Story = {
  args: {
    themeFromServerCookie: "system",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const systemThemeButton = [...canvas.getAllByRole("radio")]
      .find((radioButton) => radioButton.getAttribute(ARIA_LABEL) === "system theme")
    await expect(systemThemeButton).toBeChecked()
  },
}

export const DarkTheme: Story = {
  args: {
    themeFromServerCookie: "dark",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const darkThemeButton = [...canvas.getAllByRole("radio")]
      .find((radioButton) => radioButton.getAttribute(ARIA_LABEL) === "dark theme")
    await expect(darkThemeButton).toBeChecked()
  },
}

export const LightTheme: Story = {
  args: {
    themeFromServerCookie: "light",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const lightThemeButton = [...canvas.getAllByRole("radio")]
      .find((radioButton) => radioButton.getAttribute(ARIA_LABEL) === "light theme")
    await expect(lightThemeButton).toBeChecked()
  },
}

export const ChangeTheme: Story = {
  ...SystemTheme,
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
