import { css } from "@panda/css"

import type { FCWithChildren } from "@shared/types/FCWithChildren"

export const Heading1: FCWithChildren = (props) => {
  const { children } = props

  return (
    <h1 className={root}>
      {children}
    </h1>
  )
}

const root = css({
  fontSize: {
    base: "heading1",
    md: "heading1.md",
  },
  fontWeight: "fontWeight.bold",
})
