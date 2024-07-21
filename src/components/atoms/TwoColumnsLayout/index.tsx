import { cx } from "@panda/css"

import { ArrowIcon } from "./components/atoms/ArrowIcon"
import { Navigation } from "./components/atoms/Navigation"
import { styles } from "./styles"

import type { FCWithChildren } from "@shared/types/FCWithChildren"

const {
  hidden,
  menuTitleRow,
  navigationWrapper,
  root,
  sideNavigation,
  toggleIcon,
} = styles

export const TowColumnsLayout: FCWithChildren = (props) => {
  const { children } = props

  return (
    <div className={root}>
      <div className={sideNavigation}>
        <input defaultChecked className={cx(hidden, "peer")} id="side-bar" type="checkbox" />
        <div className={menuTitleRow}>
          <span>Menu</span>
          <label aria-label="Toggle menu" className={toggleIcon} htmlFor="side-bar">
            <ArrowIcon />
          </label>
        </div>
        <div className={navigationWrapper}>
          <Navigation />
        </div>
      </div>
      {children}
    </div>
  )
}
