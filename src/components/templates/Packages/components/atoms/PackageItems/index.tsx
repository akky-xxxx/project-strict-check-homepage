import { Heading4 } from "../../../../../atoms/Heading4"
import { Link } from "../../../../../atoms/Link"
import { Section } from "../../../../../atoms/Section"

import type { PackageItem } from "../../../types/PackageItem"
import type { FC } from "react"

type Props = {
  items: PackageItem[]
}

export const PackageItems: FC<Props> = (props) => {
  const { items } = props
  return (
    <ul>
      {items.map((record) => {
        const { contents, href, title } = record
        const id = title.replaceAll(" ", "-")

        return (
          <li key={id} id={id}>
            <Section>
              <Heading4>
                <Link href={href}>{title}</Link>
              </Heading4>
              {contents}
            </Section>
          </li>
        )
      })}
    </ul>
  )
}
