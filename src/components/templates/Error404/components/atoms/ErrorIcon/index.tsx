import { css, cx } from "@panda/css"

import type { SvgProps } from "@shared/types/SvgProps"
import type { FC } from "react"

export const ErrorIcon: FC<SvgProps> = (props) => {
  const {
    color = "currentColor",
  } = props
  return (
    <svg className={root} viewBox="0 0 32 32">
      <g>
        <polyline className={common} points="12 25 1 25 1 21 1 1 31 1 31 21 31 25 20 25" stroke={color} />
        <line className={common} stroke={color} x1="22" x2="25" y1="31" y2="31" />
        <line className={common} stroke={color} x1="7" x2="10" y1="31" y2="31" />
        <polygon className={common} points="22 31 10 31 12 25 20 25 22 31" stroke={color} />
        <line className={common} stroke={color} x1="1" x2="31" y1="21" y2="21" />
        <polyline className={cx(common, accent)} points="6 8 6 12 9 12 11 12" stroke={color} />
        <polyline className={cx(common, accent)} points="9 8 9 12 9 15" stroke={color} />
        <polyline className={cx(common, accent)} points="21 8 21 12 24 12 26 12" stroke={color} />
        <polyline className={cx(common, accent)} points="24 8 24 12 24 15" stroke={color} />
        <rect className={cx(common, accent)} height="5" stroke={color} width="5" x="13" y="9" />
      </g>
    </svg>
  )
}

const root = css({
  height: "100%",
  width: "100%",
})

const common = css({
  fill: "none",
  strokeLinejoin: "round",
  strokeWidth: 2,
})

const accent = css({
  stroke: "color.accent !important",
})
