import { Fragment } from "react"

import { UnOrderLinkList } from "../UnOrderLinkList"
import { LINK_ITEMS } from "./constants/LINK_ITEMS"

import type { FC } from "react"

export const EslintConfigAllIntroduction: FC = () => (
  <Fragment>
    <p>
      This package uses the following packages depending on the configuration.
      <br />
      So you don&apos;t have to worry about which packages you need.
    </p>
    <UnOrderLinkList items={LINK_ITEMS} />
  </Fragment>
)
