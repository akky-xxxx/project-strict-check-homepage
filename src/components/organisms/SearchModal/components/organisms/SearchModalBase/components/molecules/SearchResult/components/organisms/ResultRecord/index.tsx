import { memo } from "react"

import { css, cx } from "@panda/css"
import { useSearchModal } from "@shared/utils/useSearchModal"

import type { FC, MouseEventHandler } from "react"

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

  const handleCloseModal = useSearchModal((state) => state.handleCloseModal)
  const onClickRecord: MouseEventHandler = () => {
    handleCloseModal()
  }

  const lyStyles = [
    li,
    isSelected && selectedLi,
  ]

  return (
    <li className={cx(...lyStyles)} onMouseEnter={handleMouseEnter}>
      <a className={link} href={href} onClick={onClickRecord}>
        <p className={titleStyle}>
          {/* eslint-disable-next-line @typescript-eslint/naming-convention,react/no-danger */}
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </p>
        {/* eslint-disable-next-line @typescript-eslint/naming-convention,react/no-danger */}
        <p dangerouslySetInnerHTML={{ __html: text }} />
      </a>
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
