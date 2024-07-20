import { css } from "@panda/css"

import { CopyHash } from "../CopyHash"

import type { FCWithChildren } from "@shared/types/FCWithChildren"

type Props = {
  id?: string
}

export const Heading1: FCWithChildren<Props> = (props) => {
  const { children, id } = props

  return (
    <h1 className={root} id={id}>
      {children}
      <CopyHash hash={id} />
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
