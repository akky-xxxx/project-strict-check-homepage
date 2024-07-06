import { SVG_DEFAULT_SIZE } from "../../../../../../../../../shared/constants/SVG_DEFAULT_SIZE"

import type { SvgProps } from "../../../../../../../../../shared/types/SvgProps"
import type { FC } from "react"

export const MoonIcon: FC<SvgProps> = (props) => {
  const {
    height = SVG_DEFAULT_SIZE,
    width = SVG_DEFAULT_SIZE,
    color = "currentColor",
  } = props
  return (
    <svg height={height} viewBox="0 0 512 512" width={width}>
      <path
        d="M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z"
        fill={color}
      />
    </svg>
  )
}
