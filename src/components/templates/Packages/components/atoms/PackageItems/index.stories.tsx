import { STORY_PARAMETERS } from "@shared/constants/STORY_PARAMETERS"

import { PackageItems } from "."

import type { Meta, StoryObj } from "@storybook/react"

const items = [
  {
    title: "eslint config all",

    contents: "contents for eslint config all",
    href: "",
  },
  {
    title: "eslint config js",

    contents: "contents for eslint config js",
    href: "",
  },
  {
    title: "eslint config ts",

    contents: "contents for eslint config ts",
    href: "",
  },
  {
    title: "eslint config jest",

    contents: "contents for eslint config jest",
    href: "",
  },
  {
    title: "eslint config react",

    contents: "contents for eslint config react",
    href: "",
  },
  {
    title: "eslint config next",

    contents: "contents for eslint config next",
    href: "",
  },
  {
    title: "eslint config storybook",

    contents: "contents for eslint config storybook",
    href: "",
  },
]

const meta: Meta<typeof PackageItems> = {
  component: PackageItems,

  args: {
    items,
  },
}

export default meta
type Story = StoryObj<typeof PackageItems>

export const LightPc: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.LIGHT,
    ...STORY_PARAMETERS.VIEWPORT.PC,
  },
}

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

export const DarkPc: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.DARK,
    ...STORY_PARAMETERS.VIEWPORT.PC,
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
