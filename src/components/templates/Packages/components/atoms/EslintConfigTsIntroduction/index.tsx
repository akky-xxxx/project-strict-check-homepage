import { Fragment } from "react"

import { LINK_ITEMS } from "./constants/LINK_ITEMS"
import { UnOrderLinkList } from "../../../../../atoms/UnOrderLinkList"

import type { FC } from "react"

export const EslintConfigTsIntroduction: FC = () => (
  <Fragment>
    <p>
      This package sets some rules based on the shared config of below packages.
    </p>
    <UnOrderLinkList items={LINK_ITEMS} />
  </Fragment>
)
