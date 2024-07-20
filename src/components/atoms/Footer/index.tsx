import { css } from "@panda/css"
import { maxContentsWidth } from "@shared/styles/maxContentsWidth"

import { Link } from "../Link"

import type { FC } from "react"

export const Footer: FC = () => (
  <footer className={root}>
    <div className={maxContentsWidth}>
      <p>Released under the MIT License.</p>
      <p>
        Copyright &copy;
        {" "}
        <Link href="https://github.com/akky-xxxx">akky-xxxx</Link>
      </p>
    </div>
  </footer>
)

const root = css({
  borderTopColor: "backgroundColor.case2",
  borderTopStyle: "solid",
  borderTopWidth: 1,
  marginTop: 36,
  paddingBlock: 12,
  paddingInline: {
    md: 12,
  },
  textAlign: "center",
})
