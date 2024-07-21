import type { ReactNode } from "react"

type Cell = {
  content: ReactNode
  key: string
}
type Columns = [Cell, string, boolean]
type Rows = [Columns, ...Columns[]]

export type PluginRulesTableProps = {
  items: Rows
}
