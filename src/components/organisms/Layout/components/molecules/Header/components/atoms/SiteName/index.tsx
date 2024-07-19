import { css } from "@panda/css"

import { NextLink } from "../../../../../../../../atoms/NextLink"

import type { FC } from "react"

export const SiteName: FC = () => (
  <NextLink className={rootStyle} href="/">Strict Check</NextLink>
)

const rootStyle = css({
  fontSize: {
    base: "siteName",
    md: "siteName.md",
  },
  fontWeight: "fontWeight.bold",
})
