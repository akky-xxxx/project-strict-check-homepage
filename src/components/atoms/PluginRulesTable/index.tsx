import { Table } from "../Table"

import type { PluginRulesTableProps } from "./types/PluginRulesTableProps"
import type { TableProps } from "../Table/types/TableProps"
import type { FC } from "react"

const FIRST_RECORD = 0

const HEAD_ROW = [
  {
    content: "Name",
    key: "Name",
  },
  {
    content: "Description",
    key: "Description",
  },
  {
    content: "💼",
    key: "icons",
  },
] satisfies TableProps["items"][typeof FIRST_RECORD]

export const PluginRulesTable: FC<PluginRulesTableProps> = (props) => {
  const { items } = props
  const convertedItems = items.map((row) => {
    const [ruleNameCell, description, isIncludeSharedConfig] = row
    const { key } = ruleNameCell

    return [
      ruleNameCell,
      {
        content: description,
        key: `${key}-${description}`,
      },
      {
        content: isIncludeSharedConfig ? "✅" : "",
        key: `${key}-includeSharedConfig`,
      },
    ] satisfies TableProps["items"][number]
  })
  // @ts-expect-error storybook で描画担保する
  return <Table items={[HEAD_ROW, ...convertedItems]} />
}
