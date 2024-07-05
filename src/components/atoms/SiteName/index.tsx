import Link from "next/link"

import { css } from "@panda/css"

import type { FC } from "react"

export const SiteName: FC = () => (
  <Link className={rootStyle} href="/">Strict Check</Link>
)

const rootStyle = css({
  fontSize: {
    base: "fontSize.lg",
    md: "fontSize.xl",
  },
  fontWeight: "fontWeight.bold",
})
