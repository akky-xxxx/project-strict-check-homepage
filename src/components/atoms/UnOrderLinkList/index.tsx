import { unOrderListStyles } from "@shared/styles/unOrderListStyles"

import { Link } from "../Link"

import type { FC } from "react"

type Props = {
  items: Array<Record<"href" | "label", string> & { isExternal?: boolean }>
}

export const UnOrderLinkList: FC<Props> = (props) => {
  const { items } = props

  return (
    <ul className={unOrderListStyles.ul}>
      {items.map((item) => {
        const { href, isExternal, label } = item

        return (
          <li key={label} className={unOrderListStyles.li}>
            <Link href={href} isExternal={isExternal}>
              {label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
