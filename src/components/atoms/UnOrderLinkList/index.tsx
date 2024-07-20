import { unOrderListStyles } from "@shared/styles/unOrderListStyles"

import { Link } from "../Link"

import type { FC } from "react"

type Props = {
  items: Array<Record<"href" | "label", string>>
}

export const UnOrderLinkList: FC<Props> = (props) => {
  const { items } = props

  return (
    <ul className={unOrderListStyles.ul}>
      {items.map((item) => {
        const { href, label } = item

        return (
          <li key={label} className={unOrderListStyles.li}>
            <Link href={href}>
              {label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
