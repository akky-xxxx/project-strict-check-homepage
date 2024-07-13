import { css } from "@panda/css"

import type { FCWithChildren } from "@shared/types/FCWithChildren"

export const Heading2: FCWithChildren = (props) => {
  const { children } = props

  return (
    <h2 className={root}>
      {children}
    </h2>
  )
}

const root = css({
  fontSize: {
    base: "heading2",
    md: "heading2.md",
  },
  fontWeight: "fontWeight.bold",
})
