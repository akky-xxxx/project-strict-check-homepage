import { css } from "@panda/css"

const root = css({
  bottom: 0,
  display: "grid",
  marginInline: "auto",
  opacity: 0,
  placeContent: "center",
  position: "fixed",
  top: 0,
  transition: "opacity 0.1s ease-in-out",
  visibility: "hidden",
  zIndex: 100,

  base: {
    left: 10,
    paddingBlock: 20,
    right: 10,
  },
  md: {
    left: 0,
    paddingBlock: "initial",
    right: 0,
  },
})

const shownRoot = css({
  opacity: 1,
  visibility: "visible",
})

const mainContents = css({
  backgroundColor: "backgroundColor",
  minWidth: "80dvw",
  position: "relative",
  zIndex: 20,

  base: {
    padding: 10,
  },
  md: {
    padding: 20,
  },
})

const backdrop = css({
  backgroundColor: "backgroundColor.backdrop",
  bottom: 0,
  left: 0,
  opacity: 0,
  position: "fixed",
  right: 0,
  top: 0,
  transition: "opacity 0.1s ease-in-out, background-color 0.1s ease-in-out",
  visibility: "hidden",
  width: "100%",
  zIndex: 10,
})

const shownBackdrop = css({
  opacity: "0.7 !important",
  visibility: "initial",
})

export const styles = {
  backdrop,
  mainContents,
  root,
  shownBackdrop,
  shownRoot,
} as const
