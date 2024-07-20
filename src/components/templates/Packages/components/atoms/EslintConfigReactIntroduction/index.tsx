import { Fragment } from "react"

import { LINK_ITEMS } from "./constants/LINK_ITEMS"
import { Link } from "../../../../../atoms/Link"
import { UnOrderLinkList } from "../../../../../atoms/UnOrderLinkList"

import type { FC } from "react"

export const EslintConfigReactIntroduction: FC = () => (
  <Fragment>
    <p>
      This package sets some rules based on the shared config of below packages.
    </p>
    <UnOrderLinkList items={LINK_ITEMS} />
    <p>
      It is to possible to for typescript project, then use
      {" "}
      <Link href="/packages/eslint-config-sc-ts">eslint-config-sc-ts</Link>
      .
    </p>
  </Fragment>
)
