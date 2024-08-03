import { memo } from "react"

import { css } from "@panda/css"

import { NoResult } from "./components/atoms/NoResult"
import { ResultRecord } from "./components/atoms/ResultRecord"
import { useSearchResult } from "./modules/useSearchResult"

import type { FC } from "react"

type Props = {
  handleCloseModal: () => void
  searchWord: string
}

const SearchResultBase: FC<Props> = (props) => {
  const { handleCloseModal, searchWord } = props
  const {
    searchResults,
    selectedIndex,
    setSelectedIndex,
    ulRef,
  } = useSearchResult({ handleCloseModal, searchWord })

  if (!searchResults.length && searchWord !== "") return <NoResult searchWord={searchWord} />

  return (
    <ul ref={ulRef} className={root}>
      {searchResults.map((searchResult, index) => {
        const { href, text, title } = searchResult
        const handleMouseEnter = () => {
          setSelectedIndex(index)
        }

        return (
          <ResultRecord
            key={[title, text, href].join("")}
            handleMouseEnter={handleMouseEnter}
            href={href}
            isSelected={index === selectedIndex}
            text={text}
            title={title}
          />
        )
      })}
    </ul>
  )
}

export const SearchResult = memo(SearchResultBase)

const root = css({
  height: "80dvh",
  marginTop: 24,
  overflowY: "auto",
  overscrollBehaviorY: "contain",
})
