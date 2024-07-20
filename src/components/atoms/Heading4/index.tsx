import { css } from "@panda/css"

import { CopyHash } from "../CopyHash"

import type { FCWithChildren } from "@shared/types/FCWithChildren"

type Props = {
  id?: string
}

export const Heading4: FCWithChildren<Props> = (props) => {
  const { children, id } = props

  return (
    <h4 className={root} id={id}>
      {children}
      <CopyHash hash={id} />
    </h4>
  )
}

const root = css({
  fontSize: "heading4",
  fontWeight: "fontWeight.bold",
})
