import { css, cx } from "@panda/css"
import { heading } from "@shared/styles/heading"

import { HeadingHash } from "../HeadingHash"

import type { FCWithChildren } from "@shared/types/FCWithChildren"

type Props = {
  id?: string
}

export const Heading1: FCWithChildren<Props> = (props) => {
  const { children, id } = props

  return (
    <h1 className={cx(root, heading)} id={id}>
      {children}
      <HeadingHash hash={id} />
    </h1>
  )
}

const root = css({
  fontSize: {
    base: "heading1",
    md: "heading1.md",
  },
})
