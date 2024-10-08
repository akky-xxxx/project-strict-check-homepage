import { css, cx } from "@panda/css"

import type { FCWithChildren } from "@shared/types/FCWithChildren"

type Props = {
  handleCloseMenu: () => void
  isOpened: boolean
}

export const Drawer: FCWithChildren<Props> = (props) => {
  const { children, handleCloseMenu, isOpened } = props

  const rootStyle = [
    root,
    isOpened && openedRoot,
  ]

  const menuStyles = [
    menu,
    isOpened && openedMenu,
  ]
  const backdropStyles = [
    backdrop,
    isOpened && openedBackdrop,
  ]

  return (
    <div className={cx(...rootStyle)}>
      <button aria-label="Close the menu" className={cx(...backdropStyles)} type="button" onClick={handleCloseMenu} />
      <div className={cx(...menuStyles)}>{children}</div>
    </div>
  )
}

const root = css({
  bottom: 0,
  display: {
    md: "none",
  },
  left: 0,
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  right: 0,
  top: "var(--header-height)",
  width: "100%",
  zIndex: 10,
})

const openedRoot = css({
  pointerEvents: "initial",
})

const MENU_WIDTH = 254

const menu = css({
  backgroundColor: "backgroundColor",
  bottom: 0,
  left: `calc(100% - ${MENU_WIDTH.toString()}px)`,
  position: "absolute",
  right: 0,
  top: 0,
  transform: "translateX(100%)",
  transition: "transform 0.1s ease-in-out",
  width: MENU_WIDTH,
})

const openedMenu = css({
  transform: "translateX(0%)",
})

const backdrop = css({
  backgroundColor: "backgroundColor.backdrop",
  bottom: 0,
  left: 0,
  opacity: 0,
  position: "absolute",
  right: 0,
  top: 0,
  transition: "opacity 0.1s ease-in-out, background-color 0.1s ease-in-out",
  visibility: "hidden",
  width: "100%",
})

const openedBackdrop = css({
  opacity: "0.7 !important",
  visibility: "initial",
})
