"use client"

import { css } from "@panda/css"

import type { FC } from "react"

type Props = {
  hash: string | undefined
}

export const HeadingHash: FC<Props> = (props) => {
  const { hash } = props

  if (hash == null) return null

  return <a className={root} href={`#${hash}`}>#</a>
}

const root = css({
  "cursor": "pointer",
  "fontStyle": "italic",
  "marginLeft": 12,
  "opacity": 0,
  "transition": "opacity 0.1s ease-in-out",

  // eslint-disable-next-line @typescript-eslint/naming-convention
  ":hover > &": {
    opacity: 1,
  },
})
