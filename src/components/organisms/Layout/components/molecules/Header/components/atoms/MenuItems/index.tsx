import Link from "next/link"

import { GithubLink } from "./components/atoms/GithubLink"
import { PackageSelector } from "./components/organisms/PackageSelector"
import { ThemeSwitch } from "./components/organisms/ThemeSwitch"
import { styles } from "./styles"

import type { FC } from "react"

const {
  githubLinkWrapper,
  navStyle,
  packageLink,
  packageSelectWrapper,
  root,
  themeSwitchWrapper,
} = styles

export const MenuItems: FC = () => (
  <div className={root}>
    <nav className={navStyle}>
      <Link className={packageLink} href="/packages">Packages</Link>
      <div className={packageSelectWrapper}>
        <PackageSelector />
      </div>
    </nav>
    <div className={themeSwitchWrapper}>
      <ThemeSwitch />
    </div>
    <div className={githubLinkWrapper}>
      <GithubLink />
    </div>
  </div>
)
