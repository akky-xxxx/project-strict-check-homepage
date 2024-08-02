import type { MutableRefObject } from "react"

type Input = {
  maxIndex: number
  previousIndex: number
  ul: MutableRefObject<HTMLUListElement | null>["current"]
}

const ZERO = 0 // 正負判定用
const BORDER_WIDTH = 1

export const scrollWHenUp = (input: Input) => {
  const { maxIndex, previousIndex, ul } = input
  if (!ul) return

  const ulElement = ul

  const selectedItem = ulElement.querySelectorAll("a").item(previousIndex)
  const selectedItemTop = selectedItem.offsetTop

  const diff = selectedItemTop - ulElement.scrollTop - ulElement.offsetTop

  if (previousIndex === maxIndex) ulElement.scrollTop = selectedItemTop + selectedItem.offsetHeight
  if (diff < ZERO) ulElement.scrollTop += diff - BORDER_WIDTH
}
