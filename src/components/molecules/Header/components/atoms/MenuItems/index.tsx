import Link from "next/link"

import { GithubLink } from "./components/atoms/GithubLink"
import { ThemeSwitch } from "./components/organisms/ThemeSwitch"
import { styles } from "./styles"

import type { FC } from "react"

type ItemsProps = {
  hasPackageSelector: boolean | undefined
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
  const { hasPackageSelector } = props
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
        <ThemeSwitch />
      </div>
      <div className={githubLinkWrapper}>
        <GithubLink />
      </div>
    </div>
  )
}
