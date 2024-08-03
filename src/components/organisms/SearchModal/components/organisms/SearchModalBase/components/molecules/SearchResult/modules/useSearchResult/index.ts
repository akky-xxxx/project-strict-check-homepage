import { useRef, useState } from "react"

import { HEADINGS_INFO } from "@shared/constants/HEADINGS_INFO"

import { convertHeadingInfoToSearchDictionary } from "./modules/convertHeadingInfoToSearchDictionary"
import { searchSite } from "./modules/searchSite"
import { useKeyboardControl } from "./modules/useKeyboardControl"

const DEFAULT_INDEX = 0
const DICTIONARY = convertHeadingInfoToSearchDictionary(HEADINGS_INFO)

type Input = {
  handleCloseModal: () => void
  searchWord: string
}

export const useSearchResult = (input: Input) => {
  const { handleCloseModal, searchWord } = input
  const ulRef = useRef<HTMLUListElement>(null)
  const [selectedIndex, setSelectedIndex] = useState(DEFAULT_INDEX)
  const searchResults = searchSite(searchWord, DICTIONARY)
  const resultLength = searchResults.length

  useKeyboardControl({
    handleCloseModal,
    resultLength,
    selectedIndex,
    setSelectedIndex,
    ulRef,
  })

  return {
    searchResults,
    selectedIndex,
    setSelectedIndex,
    ulRef,
  }
}
