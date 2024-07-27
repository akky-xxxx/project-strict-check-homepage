import { css, cx } from "@panda/css"

import type { FCWithChildren } from "@shared/types/FCWithChildren"

type Props = {
  hasBorder?: boolean
}

export const Section: FCWithChildren<Props> = (props) => {
  const { children, hasBorder } = props

  const rootStyles = [
    root,
    Boolean(hasBorder) && withBorder,
  ]

  return (
    <section className={cx(...rootStyles)}>
      {children}
    </section>
  )
}

const root = css({
  marginTop: 48,
})

const withBorder = css({
  borderTopColor: "borderColor",
  borderTopStyle: "solid",
  borderTopWidth: 1,
  paddingTop: 24,
})
