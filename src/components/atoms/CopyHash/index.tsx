"use client"

import toast from "react-hot-toast"

import { css } from "@panda/css"

import type { FC } from "react"

type Props = {
  hash: string | undefined
}

export const CopyHash: FC<Props> = (props) => {
  const { hash } = props

  if (hash == null) return null

  const onClick = async () => {
    const url = new URL(window.location.href)
    const hashedUrl = `${url.origin}${url.pathname}#${hash}`
    await navigator.clipboard.writeText(hashedUrl)
    toast.success(`Copied the link to #${hash}.`, {
      style: {
        backgroundColor: "var(--colors-background-color-case2)",
        border: "var(--colors-color-accent) 1px solid",
        color: "var(--colors-color)",
      },
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  return <button className={root} type="button" onClick={onClick}>#</button>
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
