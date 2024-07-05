import "../src/app/globals.css"

import type { Preview } from "@storybook/react"
import {Fragment, useEffect} from "react"

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const {
        parameters: { backgrounds },
      } = context
      useEffect(() => {
        document.querySelector("html")?.setAttribute("data-theme", backgrounds.default)
      }, [backgrounds.default])
      return (
        <Fragment>
          <Story />
        </Fragment>
      )
    },
  ],
  parameters: {
    backgrounds: {
      default: false,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
