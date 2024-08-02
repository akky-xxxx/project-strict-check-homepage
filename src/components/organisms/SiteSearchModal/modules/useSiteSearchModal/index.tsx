import { useDeferredValue, useEffect, useRef } from "react"

import { useSearchWord } from "@shared/utils/useSearchWord"

import type { ChangeEventHandler } from "react"

export const useSiteSearchModal = () => {
  const { searchWord, setSearchWord } = useSearchWord()
  const inputRef = useRef<HTMLInputElement>(null)
  const deferredSearchWord = useDeferredValue(searchWord.trim())
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleChangeSearchWord: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchWord(event.currentTarget.value)
  }
  const handleResetSearchWord = () => {
    setSearchWord("")
    inputRef.current?.focus()
  }
  const enableReset = searchWord !== ""
  return {
    deferredSearchWord,
    enableReset,
    handleChangeSearchWord,
    handleResetSearchWord,
    inputRef,
    searchWord,
  }
}
