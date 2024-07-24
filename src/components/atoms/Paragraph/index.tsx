import { css } from "@panda/css"

import type { FCWithChildren } from "@shared/types/FCWithChildren"

export const Paragraph: FCWithChildren = (props) => {
  const { children } = props

  return (
    <p className={root}>
      {children}
    </p>
  )
}

const root = css({
  lineHeight: 2,
  marginTop: 16,
})
