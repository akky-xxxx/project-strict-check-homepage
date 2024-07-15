"use client"

import { useId } from "react"

import { cx } from "@panda/css"

import { styles } from "./styles"

import type { TabContent } from "./types/TabContent"
import type { ReactNode } from "react"

type Props<L extends string = string> = {
  contents: Array<TabContent<L>>
  selectedLabel: L
  handleSelectLabel: (label: L) => void
}

const { activeTabItem, contentStyle, hiddenRadio, tabItem, tabs } = styles

export const TabContents = <L extends string = string>(props: Props<L>): ReactNode => {
  const { contents, selectedLabel, handleSelectLabel } = props
  const id = useId()

  return (
    <div>
      <ul className={tabs}>
        {contents.map((content) => {
          const { label } = content
          const onClickLabel = () => {
            handleSelectLabel(label)
          }
          const tabItemStyle = [
            tabItem,
            label === selectedLabel && activeTabItem,
          ]
          return (
            <li key={label}>
              <label htmlFor={`${label}-${id}`}>
                <button className={cx(...tabItemStyle)} type="button" onClick={onClickLabel}>
                  {label}
                </button>
              </label>
            </li>
          )
        })}
      </ul>
      <div>
        {contents.map((content) => {
          const { label, contentInner } = content

          return (
            <div key={label} className={contentStyle}>
              {contentInner}
              <input checked={label === selectedLabel} className={hiddenRadio} id={`${label}-${id}`} name="tab" type="radio" />
            </div>
          )
        })}
      </div>
    </div>
  )
}
