import { css, cx } from "@panda/css"

import { NextLink } from "../../../../../../../NextLink"

import type { FC } from "react"

type Item = Record<"href" | "label", string> & {
  childList?: Item[]
}

type Props = {
  items: Item[] | undefined
  pathname: string
}

export const NavigationMain: FC<Props> = (props) => {
  const { items, pathname } = props

  if (!items) return null

  return (
    <ul>
      {items.map((item) => {
        const { childList, href, label } = item
        const anchorStyles = [
          anchor,
          href === pathname && currentAnchor,
        ]
        const navigationMainWrapperStyles = [
          Boolean(childList) && navigationMainWrapperWithChildren,
        ]
        return (
          <li key={href} className={li}>
            <NextLink className={cx(...anchorStyles)} href={href}>{label}</NextLink>
            <div className={cx(...navigationMainWrapperStyles)}>
              <NavigationMain items={childList} pathname={pathname} />
            </div>
          </li>
        )
      })}
    </ul>
  )
}

const li = css({
  width: "100%",
})

const anchor = css({
  backgroundColor: "backgroundColor",
  borderRadius: 4,
  color: "color",
  cursor: "pointer",
  display: "block",
  opacity: 1,
  paddingBlock: 8,
  paddingInline: 12,
  transitionDuration: "0.1s",
  transitionProperty: "background-color",
  transitionTimingFunction: "ease-in-out",

  _hover: {
    backgroundColor: "color.highlight",
  },
})

const currentAnchor = css({
  backgroundColor: "color.highlight !important",
})

const navigationMainWrapperWithChildren = css({
  paddingLeft: 16,
})
