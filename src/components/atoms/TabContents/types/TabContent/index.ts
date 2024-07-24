import type { ReactNode } from "react"

export type TabContent<L extends string = string> = {
  contentInner: ReactNode
  label: L
}
