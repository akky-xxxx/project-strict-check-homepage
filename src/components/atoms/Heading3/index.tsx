import { css, cx } from "@panda/css"
import { heading } from "@shared/styles/heading"

import { HeadingHash } from "../HeadingHash"

import type { FCWithChildren } from "@shared/types/FCWithChildren"

type Props = {
  id?: string
}

export const Heading3: FCWithChildren<Props> = (props) => {
  const { children, id } = props

  return (
    <h3 className={cx(root, heading)} id={id}>
      {children}
      <HeadingHash hash={id} />
    </h3>
  )
}

const root = css({
  fontSize: {
    base: "heading3",
    md: "heading3.md",
  },
})
