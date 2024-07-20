"use client"

import { Fragment } from "react"

import { cx } from "@panda/css"

import { styles } from "./styles"

import type { TabContent } from "./types/TabContent"
import type { ReactNode } from "react"

type Props<L extends string = string> = {
  contents: Array<TabContent<L>>
  selectedLabel: L
  handleSelectLabel: (label: L) => void
}

const { activeTabItem, root, tabItem, tabs } = styles

export const TabContents = <L extends string = string>(props: Props<L>): ReactNode => {
  const { contents, selectedLabel, handleSelectLabel } = props

  return (
    <div className={root}>
      <ul className={tabs}>
        {contents.map((content) => {
          const { label } = content
          const onClickLabel = () => {
            if (label === selectedLabel) return
            handleSelectLabel(label)
          }
          const tabItemStyle = [
            tabItem,
            label === selectedLabel && activeTabItem,
          ]
          return (
            <li key={label}>
              <button className={cx(...tabItemStyle)} type="button" onClick={onClickLabel}>
                {label}
              </button>
            </li>
          )
        })}
      </ul>
      {contents.map((content) => {
        const { label, contentInner } = content

        if (label !== selectedLabel) return null

        return (
          <Fragment key={label}>
            {contentInner}
          </Fragment>
        )
      })}
    </div>
  )
}
