import { css } from "@panda/css"
import { maxContentsWidth } from "@shared/styles/maxContentsWidth"

import { Link } from "../Link"

import type { FC } from "react"

export const Footer: FC = () => (
  <footer className={root}>
    <div className={maxContentsWidth}>
      <p>Released under the MIT License.</p>
      <p>Partial package includes the work that is distributed in the Apache License 2.0.</p>
      <p>
        Copyright &copy;
        {" "}
        <Link href="https://github.com/akky-xxxx">akky-xxxx</Link>
      </p>
    </div>
  </footer>
)

const root = css({
  backgroundColor: "backgroundColor.headerFooter",
  borderTopColor: "borderColor",
  borderTopStyle: "solid",
  borderTopWidth: 1,
  marginTop: 24,
  paddingBlock: 12,
  paddingInline: {
    md: 12,
  },
  textAlign: "center",
})
