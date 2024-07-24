import { css } from "@panda/css"

const root = css({
  display: {
    base: "block",
    md: "grid",
  },
  gridTemplateColumns: "40px minmax(0, 1fr)",
  position: "relative",
  transition: "grid-template-columns 0.1s ease-in-out",

  _hasChecked: {
    gridTemplateColumns: "clamp(300px, 30dvw, 400px) minmax(0, 1fr)",
  },
})

const MENU_TITLE_ROW = 49

const menuTitleRow = css({
  "borderBottomColor": "backgroundColor.case2",
  "borderBottomStyle": "solid",
  "borderBottomWidth": 1,
  "display": "flex",
  "height": MENU_TITLE_ROW,
  "justifyContent": "space-between",
  "marginBottom": 8,
  "paddingBottom": 8,
  "visibility": {
    base: "hidden",
    md: "initial",
  },

  // eslint-disable-next-line @typescript-eslint/naming-convention
  "& span": {
    display: "none",
  },

  "_peerChecked": {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    "& label": {
      transform: "rotate(180deg)",
    },
    // eslint-disable-next-line @typescript-eslint/naming-convention
    "& span": {
      display: "block",
    },
  },
})

const toggleIcon = css({
  cursor: "pointer",
  height: 20,
  transition: "transform 0.1s ease-in-out",
  width: 20,

  _peerChecked: {
    transform: "rotate(180deg)",
  },
})

const sideNavigation = css({
  display: {
    base: "none",
    md: "block",
  },
  height: "calc(100dvh - var(--main-contents-padding) - var(--header-height))",
  left: 0,
  paddingRight: "var(--main-contents-padding)",
  position: "sticky",
  top: "calc(var(--main-contents-padding) + var(--header-height))",
})

const navigationWrapper = css({
  display: "display",
  height: `calc(100dvh - var(--main-contents-padding) - var(--header-height) - ${MENU_TITLE_ROW.toString()}px)`,
  opacity: 0,
  overflowY: "auto",
  transition: "opacity 0.1s ease-in-out",
  visibility: "hidden",

  _peerChecked: {
    opacity: 1,
    transitionDelay: "0.1s",
    visibility: "initial",
  },
})

const hidden = css({
  display: "none",
})

export const styles = {
  hidden,
  menuTitleRow,
  navigationWrapper,
  root,
  sideNavigation,
  toggleIcon,
} as const
