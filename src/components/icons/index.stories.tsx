import { css } from "@panda/css"
import { STORY_PARAMETERS } from "@shared/constants/STORY_PARAMETERS"

import { SearchIcon } from "./SearchIcon"

import type { Meta, StoryObj } from "@storybook/react"

const root = css({
  display: "flex",
  flexWrap: "wrap",
  gap: 20,
  padding: 20,
})

const iconWrapper = css({
  height: 50,
  width: 50,
})

const icons = {
  SearchIcon,
}

const Icons = () => (
  <div className={root}>
    {Object.entries(icons).map(([name, Component]) => (
      <div key={name}>
        <div>{name}</div>
        <div className={iconWrapper}>
          <Component />
        </div>
      </div>
    ))}
  </div>
)

const meta: Meta = {
  component: Icons,
}

export default meta

export const Light: StoryObj = {
  parameters: {
    ...STORY_PARAMETERS.THEME.LIGHT,
  },
}

export const Dark: StoryObj = {
  parameters: {
    ...STORY_PARAMETERS.THEME.DARK,
  },
}
