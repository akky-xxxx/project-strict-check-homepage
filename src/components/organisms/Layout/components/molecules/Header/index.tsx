"use client"

import { Fragment, useState } from "react"

import { css, cx } from "@panda/css"
import { maxContentsWidth } from "@shared/styles/maxContentsWidth"

import { Drawer } from "./components/atoms/Drawer"
import { DrawerIcon } from "./components/atoms/DrawerIcon"
import { MenuItems } from "./components/atoms/MenuItems"
import { SiteName } from "./components/atoms/SiteName"
import { ScrollLock } from "../../../../../atoms/ScrollLock"

import type { FC } from "react"

export const Header: FC = () => {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false)
  const handleCloseMenu = () => {
    setIsOpenedMenu(false)
  }
  const handleToggleMenu = () => {
    setIsOpenedMenu((current) => !current)
  }

  return (
    <Fragment>
      <ScrollLock isLock={isOpenedMenu} />
      <header className={root}>
        <div className={cx(inner, maxContentsWidth)}>
          <SiteName />

          <div className={drawerIconWrapper}>
            <DrawerIcon handleClick={handleToggleMenu} isOpened={isOpenedMenu} />
          </div>
          <div className={rightItems}>
            <MenuItems />
          </div>
        </div>
      </header>
      <Drawer handleCloseMenu={handleCloseMenu} isOpened={isOpenedMenu}>
        <MenuItems />
      </Drawer>
    </Fragment>
  )
}

const root = css({
  backgroundColor: "backgroundColor",
  borderBottomColor: "backgroundColor.case2",
  borderBottomStyle: "solid",
  borderBottomWidth: 2,
  height: "var(--header-height)",
  paddingInline: 12,

  md: {
    position: "sticky",
    top: 0,
    zIndex: 20,
  },
})

const inner = css({
  alignItems: "center",
  display: "flex",
  height: "var(--header-height)",
})

const drawerIconWrapper = css({
  display: {
    base: "block",
    md: "none",
  },
  marginLeft: {
    base: "auto",
    md: "initial",
  },
})

const rightItems = css({
  display: {
    base: "none",
    md: "initial",
  },
  marginLeft: {
    md: "auto",
  },
})
