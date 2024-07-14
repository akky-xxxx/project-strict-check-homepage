import { expect, userEvent, within } from "@storybook/test"
import { useState } from "react"

import { STORY_PARAMETERS } from "@shared/constants/STORY_PARAMETERS"
import { sleep } from "@shared/utils/sleep"

import { TabContents } from "."

import type { Meta, StoryObj } from "@storybook/react"
import type { ReactNode } from "react"

type Label = "content1" | "content2"

const Contents = ({ content }: { content: string }) => (
  <div>
    {content}
    {" "}
    contents
  </div>
)

const contents = [
  {
    contentInner: <Contents content="content1" />,
    label: "content1",
  },
  {
    contentInner: <Contents content="content2" />,
    label: "content2",
  },
] satisfies Array<{ contentInner: ReactNode, label: Label }>

const meta: Meta<typeof TabContents> = {
  component: TabContents,

  decorators: [
    () => {
      const [selectedLabel, setSelectedLabel] = useState<Label>("content1")

      return (
        <TabContents<Label>
          contents={contents}
          handleSelectLabel={setSelectedLabel}
          selectedLabel={selectedLabel}
        />
      )
    },
  ],
}

export default meta
type Story = StoryObj<typeof TabContents>

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

    await expect(canvas.getByText("content1 contents")).toBeInTheDocument()
  },
}

export const SwitchShownContentsTest: Story = {
  tags: ["!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const button1 = canvas.getByText("content1")
    const button2 = canvas.getByText("content2")

    await sleep()
    await userEvent.click(button2)

    await expect(canvas.getByText("content2 contents")).toBeInTheDocument()

    await sleep()
    await userEvent.click(button1)

    await expect(canvas.getByText("content1 contents")).toBeInTheDocument()
  },
}
