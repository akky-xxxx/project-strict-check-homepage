import { css } from "@panda/css"

import type { FCWithChildren } from "@shared/types/FCWithChildren"

export const Heading3: FCWithChildren = (props) => {
  const { children } = props

  return (
    <h3 className={root}>
      {children}
    </h3>
  )
}

const root = css({
  fontSize: {
    base: "heading3",
    md: "heading3.md",
  },
  fontWeight: "fontWeight.bold",
})
