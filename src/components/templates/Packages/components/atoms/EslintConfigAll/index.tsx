import { Fragment } from "react"

import { LINK_ITEMS } from "./constants/LINK_ITEMS"
import { UnOrderLinkList } from "../../../../../atoms/UnOrderLinkList"

import type { FC } from "react"

export const EslintConfigAll: FC = () => (
  <Fragment>
    <p>
      This package uses the following packages depending on the configuration.
      <br />
      So you don&apos;t have to worry about which packages you need.
    </p>
    <UnOrderLinkList items={LINK_ITEMS} />
  </Fragment>
)
