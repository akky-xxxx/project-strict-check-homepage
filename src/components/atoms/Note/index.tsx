import { css } from "@panda/css"

import { InfoIcon } from "./components/atoms/InfoIcon"

import type { FCWithChildren } from "@shared/types/FCWithChildren"

export const Note: FCWithChildren = (props) => {
  const { children } = props

  return (
    <aside className={root}>
      <div className={iconWrapper}>
        <InfoIcon />
      </div>
      <p className={rightContents}>Note</p>
      <p className={rightContents}>{children}</p>
    </aside>
  )
}

const root = css({
  backgroundColor: "color.highlight",
  borderColor: "color.accent",
  borderRadius: 4,
  borderStyle: "solid",
  borderWidth: 1,
  columnGap: 8,
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  marginBlock: 16,
  padding: 12,
  rowGap: 4,
})

const iconWrapper = css({
  width: 20,
})

const rightContents = css({
  gridColumn: "2 / 3",
})
