import { css } from "@panda/css"

import type { FCWithChildren } from "@shared/types/FCWithChildren"

export const Code: FCWithChildren = (props) => {
  const { children } = props

  return <code className={root}>{children}</code>
}

const root = css({
  backgroundColor: "backgroundColor.case2",
  borderRadius: 4,
  color: "color",
  display: "inline-block",
  paddingBlock: 2,
  paddingInline: 8,
})
