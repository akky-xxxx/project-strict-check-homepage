import Link from "next/link"

import { css } from "@panda/css"
import { EXTERNAL_LINK_ATTRIBUTES } from "@shared/constants/EXTERNAL_LINK_ATTRIBUTES"

import { GithubIcon } from "./components/atoms/GithubIcon"

import type { FC } from "react"

export const GithubLink: FC = () => (
  <Link {...EXTERNAL_LINK_ATTRIBUTES} aria-label="Github" className={githubLinkStyle} href="https://github.com/akky-xxxx/strict-check">
    <GithubIcon />
  </Link>
)

const githubLinkStyle = css({
  color: "color",
  display: "inline-block",
  transition: "color 0.1s ease-in-out",
  verticalAlign: "bottom",

  height: {
    base: 44,
    md: 30,
  },
  width: {
    base: 44,
    md: 30,
  },
})
