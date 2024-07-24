import { css, cx } from "@panda/css"

import type { FC } from "react"

type Props = {
  handleClick: () => void
  isOpened: boolean
}

export const DrawerIcon: FC<Props> = (props) => {
  const { handleClick, isOpened } = props

  const upperLineStyles = [
    lineStyle,
    upperLineStyle,
    isOpened && openedUpperLineStyle,
  ]

  const centerLineStyles = [
    lineStyle,
    centerLineStyle,
    isOpened && openedCenterLineStyle,
  ]

  const lowerLineStyles = [
    lineStyle,
    lowerLineStyle,
    isOpened && openedLowerLineStyle,
  ]

  return (
    <button aria-label="menu button" className={rootStyle} type="button" onClick={handleClick}>
      <span className={cx(...upperLineStyles)} />
      <span className={cx(...centerLineStyles)} />
      <span className={cx(...lowerLineStyles)} />
    </button>
  )
}

const rootStyle = css({
  backgroundColor: "transparent",
  border: "none",
  height: 48,
  padding: 9,
  position: "relative",
  width: 48,
})

const lineStyle = css({
  animationDuration: "0.2s",
  animationFillMode: "forwards",
  animationTimingFunction: "ease-in-out",
  backgroundColor: "color",
  borderRadius: 9999,
  display: "block",
  height: 2,
  position: "absolute",
  width: 30,
})

const upperLineStyle = css({
  animation: "drawIconUpperLineToClose",
  top: 12,
})

const openedUpperLineStyle = css({
  animation: "drawIconUpperLineToOpen",
})

const centerLineStyle = css({
  animation: "drawIconMiddleLineToClose",
  bottom: 0,
  marginBlock: "auto",
  top: 0,
})

const openedCenterLineStyle = css({
  animation: "drawIconMiddleLineToOpen",
})

const lowerLineStyle = css({
  animation: "drawIconLowerLineToClose",
  bottom: 12,
})

const openedLowerLineStyle = css({
  animation: "drawIconLowerLineToOpen",
})
