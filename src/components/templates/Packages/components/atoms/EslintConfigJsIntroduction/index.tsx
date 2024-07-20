import { Fragment } from "react"

import { LINK_ITEMS } from "./constants/LINK_ITEMS"
import { Link } from "../../../../../atoms/Link"
import { UnOrderLinkList } from "../../../../../atoms/UnOrderLinkList"

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
      <Link
        isExternal
        href="https://www.npmjs.com/package/eslint-plugin-import"
      >
        eslint-plugin-import
      </Link>
      .
    </p>
  </Fragment>
)
