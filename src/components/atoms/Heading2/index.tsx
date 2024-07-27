import { css } from "@panda/css"

import { HeadingHash } from "../HeadingHash"

import type { FCWithChildren } from "@shared/types/FCWithChildren"

type Props = {
  id?: string
}

export const Heading2: FCWithChildren<Props> = (props) => {
  const { children, id } = props

  return (
    <h2 className={root} id={id}>
      {children}
      <HeadingHash hash={id} />
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
