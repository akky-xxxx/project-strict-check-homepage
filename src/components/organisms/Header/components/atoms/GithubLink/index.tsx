import Link from "next/link"

import { css } from "@panda/css"

import { GithubIcon } from "./components/GithubIcon"

import type { FC } from "react"

export const GithubLink: FC = () => (
  <Link aria-label="Github" className={githubLinkStyle} href="https://github.com/akky-xxxx/strict-check" target="_blank">
    <GithubIcon />
  </Link>
)

const githubLinkStyle = css({
  color: "color",
  transition: "color 0.1s ease-in-out",
})
