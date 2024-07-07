import Link from "next/link"

import { GithubLink } from "./components/atoms/GithubLink"
import { ThemeSwitch } from "./components/organisms/ThemeSwitch"
import { styles } from "./styles"

import type { Theme } from "@shared/types/Theme"
import type { FC } from "react"

type ItemsProps = {
  hasPackageSelector: boolean | undefined
  themeFromServerCookie: Theme
}

const {
  githubLinkWrapper,
  packageLink,
  packageLinkWrapper,
  packageSelectWrapper,
  root,
  themeSwitchWrapper,
} = styles

export const MenuItems: FC<ItemsProps> = (props) => {
  const { hasPackageSelector, themeFromServerCookie } = props
  return (
    <div className={root}>
      <div className={packageLinkWrapper}>
        <Link className={packageLink} href="/packages">Packages</Link>
      </div>
      {Boolean(hasPackageSelector) && (
        <div className={packageSelectWrapper}>
          <div>eslint</div>
          <div>config-sc</div>
          <div>-js</div>
        </div>
      )}
      <div className={themeSwitchWrapper}>
        <ThemeSwitch themeFromServerCookie={themeFromServerCookie} />
      </div>
      <div className={githubLinkWrapper}>
        <GithubLink />
      </div>
    </div>
  )
}
