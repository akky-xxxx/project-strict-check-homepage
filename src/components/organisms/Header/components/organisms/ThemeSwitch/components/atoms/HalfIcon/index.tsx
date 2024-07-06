import { css } from "@panda/css"

import type { SvgProps } from "../../../../../../../../../shared/types/SvgProps"
import type { FC } from "react"

export const HalfIcon: FC<SvgProps> = (props) => {
  const {
    color = "currentColor",
  } = props
  return (
    <svg className={root} viewBox="0 0 256 256">
      <rect fill="none" />
      <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24ZM40,128a88.1,88.1,0,0,1,88-88V216A88.1,88.1,0,0,1,40,128Z" fill={color} />
    </svg>
  )
}

const root = css({
  height: "100%",
  width: "100%",
})
