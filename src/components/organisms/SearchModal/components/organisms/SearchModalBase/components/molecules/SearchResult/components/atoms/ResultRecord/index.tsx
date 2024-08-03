import { memo } from "react"

import { css, cx } from "@panda/css"

import { NextLink } from "../../../../../../../../../../../atoms/NextLink"

import type { FC } from "react"

type Props = {
  title: string
  text: string
  href: string
  isSelected: boolean
  handleMouseEnter: () => void
}

const ResultRecordBase: FC<Props> = (props) => {
  const {
    isSelected,
    title,
    text,
    handleMouseEnter,
    href,
  } = props

  const lyStyles = [
    li,
    isSelected && selectedLi,
  ]

  return (
    <li className={cx(...lyStyles)} onMouseEnter={handleMouseEnter}>
      <NextLink className={link} href={href}>
        <p className={titleStyle}>
          {/* eslint-disable-next-line @typescript-eslint/naming-convention,react/no-danger */}
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </p>
        {/* eslint-disable-next-line @typescript-eslint/naming-convention,react/no-danger */}
        <p dangerouslySetInnerHTML={{ __html: text }} />
      </NextLink>
    </li>
  )
}

export const ResultRecord = memo(
  ResultRecordBase,
  (before, after) => before.isSelected === after.isSelected,
)

const li = css({
  "borderColor": "borderColor",
  "borderStyle": "solid",
  "borderWidth": 1,

  // eslint-disable-next-line @typescript-eslint/naming-convention
  "& + &": {
    marginTop: 12,
  },
})

const selectedLi = css({
  borderColor: "color.accent",
  color: "color.accent",
})

const link = css({
  display: "grid",
  lineHeight: 1.4,
  padding: 12,
  rowGap: 12,
})

const titleStyle = css({
  fontWeight: "fontWeight.bold",
})
