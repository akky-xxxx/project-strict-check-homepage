import { Fragment } from "react"

import { pagesPath } from "@lib/$path"

import { LINK_ITEMS } from "./constants/LINK_ITEMS"
import { Link } from "../Link"
import { UnOrderLinkList } from "../UnOrderLinkList"

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
      <Link href={pagesPath.packages.eslint_config_sc_ts.$url().path}>eslint-config-sc-ts</Link>
      .
    </p>
  </Fragment>
)
