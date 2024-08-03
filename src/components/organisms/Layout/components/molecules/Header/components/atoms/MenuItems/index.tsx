import { pagesPath } from "@lib/$path"

import { GithubLink } from "./components/atoms/GithubLink"
import { PackageSelector } from "./components/organisms/PackageSelector"
import { SearchButton } from "./components/organisms/SearchButton"
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
  searchButtonWrapper,
  themeSwitchWrapper,
} = styles

export const MenuItems: FC = () => (
  <div className={root}>
    <nav className={navStyle}>
      <NextLink className={packageLink} href={pagesPath.packages.$url().path}>Packages</NextLink>
      <div className={packageSelectWrapper}>
        <PackageSelector />
      </div>
    </nav>
    <div className={searchButtonWrapper}>
      <SearchButton />
    </div>
    <div className={themeSwitchWrapper}>
      <ThemeSwitch />
    </div>
    <div className={githubLinkWrapper}>
      <GithubLink />
    </div>
  </div>
)
