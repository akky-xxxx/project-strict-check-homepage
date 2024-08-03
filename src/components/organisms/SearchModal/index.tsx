"use client"

import { useSearchModal } from "@shared/utils/useSearchModal"

import { SearchModalBase } from "./components/organisms/SearchModalBase"
import { Portal } from "../../molecules/Portal"

import type { FC } from "react"

export const SearchModal: FC = () => {
  const { isShown, handleCloseModal } = useSearchModal((state) => state)

  return (
    <Portal>
      <SearchModalBase handleCloseModal={handleCloseModal} isShown={isShown} />
    </Portal>
  )
}
