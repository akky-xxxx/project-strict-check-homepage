import type { PropsWithChildren, ReactNode } from "react"

export type AsyncFCWithChildren<P = unknown> = (props: PropsWithChildren<P>) => Promise<ReactNode>
