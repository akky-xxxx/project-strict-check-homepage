import { css } from "@panda/css"

import type { FCWithChildren } from "@shared/types/FCWithChildren"

type Props = {
  id?: string
}

export const Heading3: FCWithChildren<Props> = (props) => {
  const { children, id } = props

  return (
    <h3 className={root} id={id}>
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
