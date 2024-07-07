"use client"

import { Fragment, useState } from "react"

import { css } from "@panda/css"

import { Drawer } from "./components/atoms/Drawer"
import { DrawerIcon } from "./components/atoms/DrawerIcon"
import { MenuItems } from "./components/atoms/MenuItems"
import { SiteName } from "./components/atoms/SiteName"
import { ScrollLock } from "../../atoms/ScrollLock"

import type { Theme } from "@shared/types/Theme"
import type { FC } from "react"

type Props = {
  hasPackageSelector?: boolean
  themeFromServerCookie: Theme
}

export const Header: FC<Props> = (props) => {
  const {
    hasPackageSelector,
    themeFromServerCookie,
  } = props

  const [isOpenedMenu, setIsOpenedMenu] = useState(false)
  const handleToggleMenu = () => {
    setIsOpenedMenu((current) => !current)
  }

  return (
    <Fragment>
      <ScrollLock isLock={isOpenedMenu} />
      <header className={root}>
        <SiteName />

        <div className={drawerIconWrapper}>
          <DrawerIcon handleClick={handleToggleMenu} isOpened={isOpenedMenu} />
        </div>
        <div className={rightItems}>
          <MenuItems
            hasPackageSelector={hasPackageSelector}
            themeFromServerCookie={themeFromServerCookie}
          />
        </div>
      </header>
      <Drawer isOpened={isOpenedMenu}>
        <MenuItems
          hasPackageSelector={hasPackageSelector}
          themeFromServerCookie={themeFromServerCookie}
        />
      </Drawer>
    </Fragment>
  )
}

const root = css({
  alignItems: "center",
  borderBottomColor: "backgroundColor.case2",
  borderBottomStyle: "solid",
  borderBottomWidth: 2,
  display: "flex",
  height: "var(--header-height)",
  paddingInline: 12,
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
