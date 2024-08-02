import { css } from "@panda/css"

import type { FC } from "react"

type Props = {
  searchWord: string
}

export const NoResult: FC<Props> = (props) => {
  const { searchWord } = props

  return (
    <div className={root}>
      No results for &quot;
      {searchWord}
      &quot;
    </div>
  )
}

const root = css({
  display: "grid",
  padding: 20,
  placeContent: "center",
})
