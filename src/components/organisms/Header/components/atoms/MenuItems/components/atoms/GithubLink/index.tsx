import Link from "next/link"

import { css } from "@panda/css"

import { GithubIcon } from "./components/atoms/GithubIcon"

import type { FC } from "react"

export const GithubLink: FC = () => (
  <Link aria-label="Github" className={githubLinkStyle} href="https://github.com/akky-xxxx/strict-check" target="_blank">
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
