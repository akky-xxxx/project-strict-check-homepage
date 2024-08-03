import type { MutableRefObject } from "react"

type Input = {
  nextIndex: number
  ul: MutableRefObject<HTMLUListElement | null>["current"]
}

const FIRST_ITEM = 0
const SCROLL_START = 0
const BORDER_WIDTH = 1
const ZERO = 0 // 正負判定用

export const scrollWhenDown = (input: Input) => {
  const { nextIndex, ul } = input
  if (!ul) return

  const ulElement = ul
  const ulElementBottom = ulElement.offsetTop + ulElement.offsetHeight

  const selectedItem = ulElement.querySelectorAll("a").item(nextIndex)
  const selectedItemBottom = selectedItem.offsetTop + selectedItem.offsetHeight

  const diff = selectedItemBottom - ulElementBottom - ulElement.scrollTop

  if (nextIndex === FIRST_ITEM) ulElement.scrollTop = SCROLL_START
  if (diff > ZERO) ulElement.scrollTop += diff + BORDER_WIDTH
}
