import { within, expect } from "@storybook/test"

import { STORY_PARAMETERS } from "@shared/constants/STORY_PARAMETERS"

import { ThemeSwitch } from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ThemeSwitch> = {
  component: ThemeSwitch,
}

export default meta
type Story = StoryObj<typeof ThemeSwitch>

const ARIA_LABEL = "aria-label"

export const TbSystemButtonActive: Story = {
  args: {
    selectedTheme: "system",
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
    ...STORY_PARAMETERS.VIEWPORTS.TB,
  },
}

export const SpSystemButtonActive: Story = {
  ...TbSystemButtonActive,
  parameters: {
    ...TbSystemButtonActive.parameters,
    ...STORY_PARAMETERS.VIEWPORTS.SP,
  },
}

export const TbDarkButtonActive: Story = {
  args: {
    selectedTheme: "dark",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const darkThemeButton = [...canvas.getAllByRole("radio")]
      .find((radioButton) => radioButton.getAttribute(ARIA_LABEL) === "dark theme")
    await expect(darkThemeButton).toBeChecked()
  },

  parameters: {
    ...STORY_PARAMETERS.THEME.DARK,
    ...STORY_PARAMETERS.VIEWPORTS.TB,
  },
}

export const SpDarkButtonActive: Story = {
  ...TbDarkButtonActive,
  parameters: {
    ...TbDarkButtonActive.parameters,
    ...STORY_PARAMETERS.VIEWPORTS.SP,
  },
}

export const TbLightButtonActive: Story = {
  args: {
    selectedTheme: "light",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const lightThemeButton = [...canvas.getAllByRole("radio")]
      .find((radioButton) => radioButton.getAttribute(ARIA_LABEL) === "light theme")
    await expect(lightThemeButton).toBeChecked()
  },

  parameters: {
    ...STORY_PARAMETERS.THEME.LIGHT,
    ...STORY_PARAMETERS.VIEWPORTS.TB,
  },
}

export const SpLightButtonActive: Story = {
  ...TbLightButtonActive,
  parameters: {
    ...TbLightButtonActive.parameters,
    ...STORY_PARAMETERS.VIEWPORTS.SP,
  },
}
