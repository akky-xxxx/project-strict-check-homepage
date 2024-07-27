import { css, cx } from "@panda/css"
import { heading } from "@shared/styles/heading"

import { HeadingHash } from "../HeadingHash"

import type { FCWithChildren } from "@shared/types/FCWithChildren"

type Props = {
  id?: string
}

export const Heading4: FCWithChildren<Props> = (props) => {
  const { children, id } = props

  return (
    <h4 className={cx(root, heading)} id={id}>
      {children}
      <HeadingHash hash={id} />
    </h4>
  )
}

const root = css({
  fontSize: "heading4",
})
