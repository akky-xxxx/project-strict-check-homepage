import { css } from "@panda/css"
import { maxContentsWidth } from "@shared/styles/maxContentsWidth"

import type { FCWithChildren } from "@shared/types/FCWithChildren"

export const Main: FCWithChildren = (props) => {
  const { children } = props

  return (
    <div className={root}>
      <main className={maxContentsWidth}>
        {children}
      </main>
    </div>
  )
}

const root = css({
  padding: "var(--main-contents-padding)",
})
