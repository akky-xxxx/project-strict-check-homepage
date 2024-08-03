import { useEffect } from "react"

import { getHandleKeyDown } from "./modules/getHandleKeyDown"

import type { Dispatch, MutableRefObject, SetStateAction } from "react"

type Input = {
  handleCloseModal: () => void
  resultLength: number
  selectedIndex: number
  setSelectedIndex: Dispatch<SetStateAction<number>>
  ulRef: MutableRefObject<HTMLUListElement | null>
}

export const useKeyboardControl = (input: Input) => {
  const {
    handleCloseModal,
    resultLength,
    selectedIndex,
    setSelectedIndex,
    ulRef,
  } = input

  useEffect(() => {
    const handleKeyDown = getHandleKeyDown({
      handleCloseModal,
      resultLength,
      selectedIndex,
      setSelectedIndex,
      ulRef,
    })
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleCloseModal, resultLength, selectedIndex, setSelectedIndex, ulRef])

  return {
    selectedIndex,
    ulRef,
  }
}
