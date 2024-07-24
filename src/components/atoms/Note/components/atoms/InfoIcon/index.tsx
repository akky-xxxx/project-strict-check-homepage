import { css } from "@panda/css"

import type { SvgProps } from "@shared/types/SvgProps"
import type { FC } from "react"

export const InfoIcon: FC<SvgProps> = (props) => {
  const {
    color = "currentColor",
  } = props
  return (
    <svg className={root} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h48v48H0z" fill="none" />
      <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm2 30h-4V22h4v12zm0-16h-4v-4h4v4z" fill={color} />
    </svg>
  )
}

const root = css({
  height: "100%",
  width: "100%",
})
