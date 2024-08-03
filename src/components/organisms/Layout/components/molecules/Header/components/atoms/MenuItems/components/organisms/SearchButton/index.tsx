import { useEffect } from "react"

import { css } from "@panda/css"
import { useSearchModal } from "@shared/utils/useSearchModal"

import { SearchIcon } from "../../../../../../../../../../../icons/SearchIcon"

import type { FC } from "react"

export const SearchButton: FC = () => {
  const handleOpenModal = useSearchModal((state) => state.handleOpenModal)
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.code === "Slash") {
      event.preventDefault()
      handleOpenModal()
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  // 指定不要なため
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <button className={button} type="button" onClick={handleOpenModal}>
      <div className={iconWrapper}>
        <SearchIcon />
      </div>
      Search
    </button>
  )
}

const button = css({
  alignItems: "center",
  backgroundColor: "backgroundColor.case2",
  columnGap: 4,
  cursor: "pointer",
  display: "flex",
  fontSize: "fontSize.sm",
  height: {
    base: 48,
    md: 30,
  },
  paddingInline: 8,
  width: {
    base: "100%",
    md: "initial",
  },
})

const iconWrapper = css({
  height: 15,
  width: 15,
})
