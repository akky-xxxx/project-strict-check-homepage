import { cx } from "@panda/css"

import { ResetIcon } from "./components/atoms/ResetIcon"
import { styles } from "./styles"
import { SearchIcon } from "../../../../../../../../icons/SearchIcon"

import type { ChangeEventHandler, FC, MutableRefObject } from "react"

type Props = {
  enableReset: boolean
  handleChangeSearchWord: ChangeEventHandler<HTMLInputElement>
  handleResetSearchWord: () => void
  inputRef: MutableRefObject<HTMLInputElement | null>
  searchWord: string
}

const {
  disableResetButton,
  iconWrapper,
  input,
  label,
  resetButton,
  resetIconWrapper,
  root,
  searchIconWrapper,
} = styles

export const Input: FC<Props> = (props) => {
  const {
    enableReset,
    handleChangeSearchWord,
    handleResetSearchWord,
    inputRef,
    searchWord,
  } = props

  const resetButtonStyles = [
    resetButton,
    !enableReset && disableResetButton,
  ]

  return (
    <div className={root}>
      <label aria-label="Input search word" className={label}>
        <div className={cx(iconWrapper, searchIconWrapper)}>
          <SearchIcon />
        </div>
        <input
          ref={inputRef}
          className={input}
          placeholder="Search"
          type="text"
          value={searchWord}
          onChange={handleChangeSearchWord}
        />
      </label>
      <div className={cx(iconWrapper, resetIconWrapper)}>
        <button
          aria-label="Reset search word"
          className={cx(...resetButtonStyles)}
          disabled={!enableReset}
          type="button"
          onClick={handleResetSearchWord}
        >
          <ResetIcon />
        </button>
      </div>
    </div>
  )
}
