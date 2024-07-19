import { GithubLink } from "./components/atoms/GithubLink"
import { PackageSelector } from "./components/organisms/PackageSelector"
import { ThemeSwitch } from "./components/organisms/ThemeSwitch"
import { styles } from "./styles"
import { NextLink } from "../../../../../../../../atoms/NextLink"

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
      <NextLink className={packageLink} href="/packages">Packages</NextLink>
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
