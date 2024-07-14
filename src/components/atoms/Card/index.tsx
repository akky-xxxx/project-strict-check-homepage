import Link from "next/link"

import { css } from "@panda/css"

import { Paragraph } from "../Paragraph"

import type { FC } from "react"

type Props = {
  description?: string
  href: string
  title: string
}

export const Card: FC<Props> = (props) => {
  const { description, href, title } = props

  return (
    <aside>
      <Link className={link} href={href}>
        <p className={titleStyle}>{title}</p>
        {Boolean(description) && (
          <Paragraph>
            {description}
          </Paragraph>
        )}
      </Link>
    </aside>
  )
}

const link = css({
  borderColor: "backgroundColor.case2",
  borderRadius: 4,
  borderStyle: "solid",
  borderWidth: 1,
  display: "block",
  padding: 12,
  transition: "background-color 0.15s ease-in-out, border-color 0.15s ease-in-out",

  _hover: {
    backgroundColor: "color.highlight",
    borderColor: "color.accent",
  },
})

const titleStyle = css({
  fontSize: "SIZE_18",
  fontWeight: "fontWeight.bold",
})
