import { css } from "@panda/css"
import { EXTERNAL_LINK_ATTRIBUTES } from "@shared/constants/EXTERNAL_LINK_ATTRIBUTES"
import { link } from "@shared/styles/link"
import { maxContentsWidth } from "@shared/styles/maxContentsWidth"

import type { FC } from "react"

export const Footer: FC = () => (
  <footer className={root}>
    <div className={maxContentsWidth}>
      <p>Released under the MIT License.</p>
      <p>
        Copyright &copy;
        {" "}
        <a {...EXTERNAL_LINK_ATTRIBUTES} className={link} href="https://github.com/akky-xxxx">akky-xxxx</a>
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
