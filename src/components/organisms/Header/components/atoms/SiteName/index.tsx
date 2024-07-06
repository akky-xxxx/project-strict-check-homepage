import Link from "next/link"

import { css } from "@panda/css"

import type { FC } from "react"

export const SiteName: FC = () => (
  <Link className={rootStyle} href="/public">Strict Check</Link>
)

const rootStyle = css({
  fontSize: {
    base: "fontSize.xl",
    md: "fontSize.lg",
  },
  fontWeight: "fontWeight.bold",
})
