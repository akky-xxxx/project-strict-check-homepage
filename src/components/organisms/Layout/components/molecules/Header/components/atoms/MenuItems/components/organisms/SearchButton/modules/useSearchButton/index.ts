import { useEffect } from "react"

import { useSearchModal } from "@shared/utils/useSearchModal"

export const useSearchButton = () => {
  const handleOpenModal = useSearchModal((state) => state.handleOpenModal)
  let isMetaLeftDown = false
  let isMetaRightDown = false
  let isKeyKDown = false

  // eslint-disable-next-line complexity, max-statements
  const handleKeyDown = (event: KeyboardEvent) => {
    const { code } = event

    if (code === "MetaLeft") isMetaLeftDown = true
    if (code === "MetaRight") isMetaRightDown = true
    if (code === "KeyK") isKeyKDown = true

    const isMultipleKey = (isMetaLeftDown || isMetaRightDown) && isKeyKDown
    if (isMultipleKey || code === "Slash") {
      event.preventDefault()
      handleOpenModal()
      isKeyKDown = false
      isMetaLeftDown = false
      isMetaRightDown = false
    }
  }

  const handleKeyUp = (event: KeyboardEvent) => {
    const { code } = event
    if (code === "MetaLeft") isMetaLeftDown = false
    if (code === "MetaRight") isMetaRightDown = false
    if (code === "KeyK") isKeyKDown = false
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("keyup", handleKeyUp)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("keyup", handleKeyUp)
    }
    // 指定不要なため
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { handleOpenModal }
}
