import { css } from "@panda/css"

import type { SvgProps } from "@shared/types/SvgProps"
import type { FC } from "react"

export const ArrowIcon: FC<SvgProps> = (props) => {
  const {
    color = "currentColor",
  } = props
  return (
    <svg className={root} viewBox="0 0 24 24">
      <path
        d="M3.9,18.9V5.1c0-1.6,1.7-2.6,3-1.8l12,6.9c1.4,0.8,1.4,2.9,0,3.7l-12,6.9C5.6,21.5,3.9,20.5,3.9,18.9z"
        fill={color}
      />
    </svg>
  )
}

const root = css({
  height: "100%",
  width: "100%",
})
