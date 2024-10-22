import { Fragment } from "react"

import { Link } from "../Link"
import { UnOrderLinkList } from "../UnOrderLinkList"
import { LINK_ITEMS } from "./constants/LINK_ITEMS"

import type { FC } from "react"

export const EslintConfigJsIntroduction: FC = () => (
  <Fragment>
    <p>
      This package sets some rules based on the shared config of below packages.
    </p>
    <UnOrderLinkList items={LINK_ITEMS} />
    <p>
      And, set some rules from
      {" "}
      <Link href="https://www.npmjs.com/package/eslint-plugin-import">
        eslint-plugin-import
      </Link>
      .
    </p>
  </Fragment>
)
