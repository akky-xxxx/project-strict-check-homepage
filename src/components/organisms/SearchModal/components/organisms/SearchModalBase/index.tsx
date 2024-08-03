import { Fragment } from "react"

import { cx } from "@panda/css"

import { SearchResult } from "./components/molecules/SearchResult"
import { Input } from "./components/molecules/SearchResult/components/atoms/Input"
import { useSiteSearchModal } from "./modules/useSiteSearchModal"
import { styles } from "./styles"
import { ScrollLock } from "../../../../../atoms/ScrollLock"

import type { FC } from "react"

type Props = {
  handleCloseModal: () => void
  isShown: boolean
}

const {
  backdrop,
  mainContents,
  root,
  shownBackdrop,
  shownRoot,
} = styles

export const SearchModalBase: FC<Props> = (props) => {
  const {
    handleCloseModal,
    isShown,
  } = props
  const {
    deferredSearchWord,
    enableReset,
    handleChangeSearchWord,
    handleResetSearchWord,
    inputRef,
    searchWord,
  } = useSiteSearchModal()
  const backdropStyles = [
    backdrop,
    isShown && shownBackdrop,
  ]
  const rootStyles = [
    root,
    isShown && shownRoot,
  ]

  return (
    <Fragment>
      <ScrollLock isLock={isShown} />
      <div className={cx(...rootStyles)}>
        <div className={mainContents}>
          <Input
            enableReset={enableReset}
            handleChangeSearchWord={handleChangeSearchWord}
            handleResetSearchWord={handleResetSearchWord}
            inputRef={inputRef}
            searchWord={searchWord}
          />
          <SearchResult
            handleCloseModal={handleCloseModal}
            searchWord={deferredSearchWord}
          />
        </div>
        <button
          aria-label="Close search"
          className={cx(...backdropStyles)}
          type="button"
          onClick={handleCloseModal}
        />
      </div>
    </Fragment>
  )
}
