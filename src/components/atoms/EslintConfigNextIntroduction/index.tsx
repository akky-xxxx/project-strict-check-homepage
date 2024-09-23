import { Fragment } from "react"

import { UnOrderLinkList } from "../UnOrderLinkList"
import { LINK_ITEMS } from "./constants/LINK_ITEMS"

import type { FC } from "react"

export const EslintConfigNextIntroduction: FC = () => (
  <Fragment>
    <p>
      This package sets some rules based on the shared config of below packages.
    </p>
    <UnOrderLinkList items={LINK_ITEMS} />
  </Fragment>
)
