import { getLoopedNextIndex } from "./modules/getLoopedNextIndex"
import { getLoopedPreviousIndex } from "./modules/getLoopedPreviousIndex"
import { scrollWHenUp } from "./modules/scrollWHenUp"
import { scrollWhenDown } from "./modules/scrollWhenDown"

import type { Dispatch, MutableRefObject, SetStateAction } from "react"

type Input = {
  handleCloseModal: () => void
  ulRef: MutableRefObject<HTMLUListElement | null>
  selectedIndex: number
  setSelectedIndex: Dispatch<SetStateAction<number>>
  resultLength: number
}

export const getHandleKeyDown = (input: Input) => {
  const {
    handleCloseModal,
    resultLength,
    selectedIndex,
    setSelectedIndex,
    ulRef,
  } = input
  // 配列長から要素インデックスに変換
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const maxIndex = resultLength - 1

  // eslint-disable-next-line max-statements
  return (event: KeyboardEvent) => {
    const { key } = event
    switch (key) {
      case "ArrowUp": {
        event.preventDefault()
        const previousIndex = getLoopedPreviousIndex(maxIndex)(selectedIndex)
        scrollWHenUp({ maxIndex, previousIndex, ul: ulRef.current })
        setSelectedIndex(previousIndex)
        break
      }
      case "ArrowDown": {
        event.preventDefault()
        const nextIndex = getLoopedNextIndex(maxIndex)(selectedIndex)
        scrollWhenDown({ nextIndex, ul: ulRef.current })
        setSelectedIndex(nextIndex)
        break
      }
      case "Enter": {
        event.preventDefault()
        ulRef.current?.querySelectorAll("a").item(selectedIndex).click()
        break
      }
      case "Escape": {
        event.preventDefault()
        handleCloseModal()
        break
      }
      default: {
        break
      }
    }
  }
}
