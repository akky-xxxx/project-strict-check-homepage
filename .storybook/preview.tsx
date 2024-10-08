import "../src/app/globals.css"

import { getRouter, usePathname } from "@storybook/nextjs/navigation.mock"
import mockRouter from "next-router-mock"
import { useEffect } from "react"

import { PackageNameProvider } from "../src/shared/storeProviders/packageName"
import { ThemeProvider } from "../src/shared/storeProviders/theme"
import { MainContentProviders } from "../src/components/organisms/MainContentProviders"

import type { Preview } from "@storybook/react"

const preview: Preview = {
  beforeEach: () => {
    getRouter().push.mockImplementation(
      (...args: Parameters<typeof mockRouter.push>) => mockRouter.push(...args)
    )
    getRouter().replace.mockImplementation(
      (...args: Parameters<typeof mockRouter.replace>) => mockRouter.replace(...args)
    )
    usePathname.mockImplementation(() => mockRouter.pathname)
  },
  decorators: [
    (Story, context) => {
      const {
        parameters: { backgrounds },
      } = context
      useEffect(() => {
        document.querySelector("html")?.setAttribute("data-theme", backgrounds.default)
      }, [backgrounds.default])
      return (
        <ThemeProvider theme={backgrounds.default}>
          <PackageNameProvider>
            <MainContentProviders eslintConfig="flat" packageManager="npm">
              <Story />
            </MainContentProviders>
          </PackageNameProvider>
        </ThemeProvider>
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
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
    viewport: {
      viewports: [
        {
          name: "sp",
          styles: { height: "500px", width: "380px" },
          type: "mobile"
        },
        {
          name: "tb",
          styles: { height: "500px", width: "768px" },
          type: "tablet"
        },
        {
          name: "pc",
          styles: { height: "700px", width: "1024px" },
          type: "desktop"
        },
      ],
    },
  },
  tags: ["autodocs"],
}

export default preview
