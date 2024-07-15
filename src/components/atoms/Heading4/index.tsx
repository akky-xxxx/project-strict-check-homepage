import { css } from "@panda/css"

import type { FCWithChildren } from "@shared/types/FCWithChildren"

type Props = {
  id?: string
}

export const Heading4: FCWithChildren<Props> = (props) => {
  const { children, id } = props

  return (
    <h4 className={root} id={id}>
      {children}
    </h4>
  )
}

const root = css({
  fontSize: "heading4",
  fontWeight: "fontWeight.bold",
})
