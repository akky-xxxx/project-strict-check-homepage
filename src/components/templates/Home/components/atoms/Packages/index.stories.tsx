import { expect, userEvent, within } from "@storybook/test"
import mockRouter from "next-router-mock"

import { STORY_PARAMETERS } from "@shared/constants/STORY_PARAMETERS"

import { Packages } from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Packages> = {
  component: Packages,
}

export default meta
type Story = StoryObj<typeof Packages>

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

export const OrderAndAttributesTest: Story = {
  tags: ["!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const linkElements = canvas.getAllByRole("link")

    await expect(linkElements.at(0)?.querySelector("p")?.textContent).toBe("eslint-config-sc-all")
    await expect(linkElements.at(1)?.querySelector("p")?.textContent).toBe("eslint-config-sc-js")
    await expect(linkElements.at(2)?.querySelector("p")?.textContent).toBe("eslint-config-sc-ts")
    await expect(linkElements.at(3)?.querySelector("p")?.textContent).toBe("eslint-config-sc-jest")
    await expect(linkElements.at(4)?.querySelector("p")?.textContent).toBe("eslint-config-sc-react")
    await expect(linkElements.at(5)?.querySelector("p")?.textContent).toBe("eslint-config-sc-next")
    await expect(linkElements.at(6)?.querySelector("p")?.textContent).toBe("eslint-config-sc-storybook")
    await expect(linkElements.at(7)?.querySelector("p")?.textContent).toBe("eslint-plugin-sc-js")

    await expect(linkElements.at(0)?.querySelectorAll("p")[1]?.textContent).toBe("All in one package that eslint config sc series.")
    await expect(linkElements.at(1)?.querySelectorAll("p")[1]?.textContent).toBe("eslint config for javascript.")
    await expect(linkElements.at(2)?.querySelectorAll("p")[1]?.textContent).toBe("eslint config for typescript.")
    await expect(linkElements.at(3)?.querySelectorAll("p")[1]?.textContent).toBe("eslint config for Jest.")
    await expect(linkElements.at(4)?.querySelectorAll("p")[1]?.textContent).toBe("eslint config for React.js.")
    await expect(linkElements.at(5)?.querySelectorAll("p")[1]?.textContent).toBe("eslint config for Next.js.")
    await expect(linkElements.at(6)?.querySelectorAll("p")[1]?.textContent).toBe("eslint config for Storybook.")
    await expect(linkElements.at(7)?.querySelectorAll("p")[1]?.textContent).toBe("eslint plugin for javascript.")

    await expect(linkElements.at(0)?.getAttribute("href")).toBe("/packages/eslint-config-sc-all")
    await expect(linkElements.at(1)?.getAttribute("href")).toBe("/packages/eslint-config-sc-js")
    await expect(linkElements.at(2)?.getAttribute("href")).toBe("/packages/eslint-config-sc-ts")
    await expect(linkElements.at(3)?.getAttribute("href")).toBe("/packages/eslint-config-sc-jest")
    await expect(linkElements.at(4)?.getAttribute("href")).toBe("/packages/eslint-config-sc-react")
    await expect(linkElements.at(5)?.getAttribute("href")).toBe("/packages/eslint-config-sc-next")
    await expect(linkElements.at(6)?.getAttribute("href")).toBe("/packages/eslint-config-sc-storybook")
    await expect(linkElements.at(7)?.getAttribute("href")).toBe("/packages/eslint-plugin-sc-js")
  },
}

export const LinkDestinationTest: Story = {
  tags: ["!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getByText("eslint-config-sc-all"))
    await expect(mockRouter).toMatchObject({ pathname: "/packages/eslint-config-sc-all" })

    await userEvent.click(canvas.getByText("eslint-config-sc-js"))
    await expect(mockRouter).toMatchObject({ pathname: "/packages/eslint-config-sc-js" })

    await userEvent.click(canvas.getByText("eslint-config-sc-ts"))
    await expect(mockRouter).toMatchObject({ pathname: "/packages/eslint-config-sc-ts" })

    await userEvent.click(canvas.getByText("eslint-config-sc-jest"))
    await expect(mockRouter).toMatchObject({ pathname: "/packages/eslint-config-sc-jest" })

    await userEvent.click(canvas.getByText("eslint-config-sc-react"))
    await expect(mockRouter).toMatchObject({ pathname: "/packages/eslint-config-sc-react" })

    await userEvent.click(canvas.getByText("eslint-config-sc-next"))
    await expect(mockRouter).toMatchObject({ pathname: "/packages/eslint-config-sc-next" })

    await userEvent.click(canvas.getByText("eslint-config-sc-storybook"))
    await expect(mockRouter).toMatchObject({ pathname: "/packages/eslint-config-sc-storybook" })

    await userEvent.click(canvas.getByText("eslint-plugin-sc-js"))
    await expect(mockRouter).toMatchObject({ pathname: "/packages/eslint-plugin-sc-js" })
  },
}
