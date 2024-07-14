"use client"

import { usePackageManagerTabContents } from "./modules/usePackageManagerTabContents"
import { TabContents } from "../../atoms/TabContents"

import type { PackageManager } from "@shared/types/PackageManager"
import type { FC } from "react"

type Props = Record<"bun" | "npm" | "pnpm" | "yarn", string>

export const PackageManagerTabContents: FC<Props> = (props) => {
  const { bun, npm, pnpm, yarn } = props

  const dependencies = usePackageManagerTabContents({ bun, npm, pnpm, yarn })

  return <TabContents<PackageManager> {...dependencies} />
}
