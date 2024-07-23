import { expect, userEvent, within } from "@storybook/test"
import mockRouter from "next-router-mock"

import { STORY_PARAMETERS } from "@shared/constants/STORY_PARAMETERS"

import { Navigation } from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Navigation> = {
  component: Navigation,

  args: {
    children: "children",
  },
}

export default meta
type Story = StoryObj<typeof Navigation>

export const Light: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.LIGHT,
  },
}

export const Dark: Story = {
  parameters: {
    ...STORY_PARAMETERS.THEME.DARK,
  },
}

export const LinkItemsTest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const anchorElements = [...canvas.getAllByRole("link")]
    const expects = [
      { name: "Home", href: "/" },
      { name: "Packages", href: "/packages" },
      { name: "eslint-config-sc-all", href: "/packages/eslint-config-sc-all" },
      { name: "eslint-config-sc-js", href: "/packages/eslint-config-sc-js" },
      { name: "eslint-config-sc-ts", href: "/packages/eslint-config-sc-ts" },
      { name: "eslint-config-sc-jest", href: "/packages/eslint-config-sc-jest" },
      { name: "eslint-config-sc-react", href: "/packages/eslint-config-sc-react" },
      { name: "eslint-config-sc-next", href: "/packages/eslint-config-sc-next" },
      { name: "eslint-config-sc-storybook", href: "/packages/eslint-config-sc-storybook" },
      { name: "eslint-plugin-sc-js", href: "/packages/eslint-plugin-sc-js" },
      { name: "rules", href: "/packages/eslint-plugin-sc-js/rules" },
      { name: "file-path-patterns", href: "/packages/eslint-plugin-sc-js/rules/file-path-patterns" },
      { name: "forbidden-multiple-named-exports", href: "/packages/eslint-plugin-sc-js/rules/forbidden-multiple-named-exports" },
      { name: "individual-import", href: "/packages/eslint-plugin-sc-js/rules/individual-import" },
      { name: "match-names-of-file-and-export", href: "/packages/eslint-plugin-sc-js/rules/match-names-of-file-and-export" },
      { name: "restrict-use-of-process-env", href: "/packages/eslint-plugin-sc-js/rules/restrict-use-of-process-env" },
    ] as const
    await expect(anchorElements).toHaveLength(16)

    // eslint-disable-next-line no-restricted-syntax
    for await (const [index, expected] of expects.entries()) {
      const targetAnchor = anchorElements.at(index)
      if (targetAnchor) {
        await expect(targetAnchor).toHaveTextContent(expected.name)
        await userEvent.click(targetAnchor)
        await expect(mockRouter).toMatchObject({ pathname: expected.href })
      }
    }
  },
}
