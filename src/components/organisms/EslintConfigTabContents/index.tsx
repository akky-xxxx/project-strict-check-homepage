"use client"

import { useEslintConfigTabContents } from "./modules/useEslintConfigTabContents"
import { TabContents } from "../../atoms/TabContents"

import type { EslintConfig } from "@shared/types/EslintConfig"
import type { FC } from "react"

type Props = Record<"flatCode" | "legacyCode", string>

export const EslintConfigTabContents: FC<Props> = (props) => {
  const { flatCode, legacyCode } = props

  const dependencies = useEslintConfigTabContents({ flatCode, legacyCode })

  return <TabContents<EslintConfig> {...dependencies} />
}
