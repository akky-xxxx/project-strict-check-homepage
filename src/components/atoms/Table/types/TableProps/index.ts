import type { ReactNode } from "react"

type Cell = {
  content: ReactNode
  key: string
}
type Columns = [Cell, ...Cell[]]
type Rows = [Columns, Columns, ...Columns[]]

export type TableProps = {
  items: Rows
}
