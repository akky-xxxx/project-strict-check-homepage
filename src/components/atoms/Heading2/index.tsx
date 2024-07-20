import { css } from "@panda/css"

import { CopyHash } from "../CopyHash"

import type { FCWithChildren } from "@shared/types/FCWithChildren"

type Props = {
  id?: string
}

export const Heading2: FCWithChildren<Props> = (props) => {
  const { children, id } = props

  return (
    <h2 className={root} id={id}>
      {children}
      <CopyHash hash={id} />
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
