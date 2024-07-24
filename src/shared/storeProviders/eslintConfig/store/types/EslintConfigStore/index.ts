import type { EslintConfigState } from "../EslintConfigState"
import type { EslintConfig } from "@shared/types/EslintConfig"

type EslintConfigActions = {
  setEslintConfig: (eslintConfig: EslintConfig) => void
}

export type EslintConfigStore = EslintConfigActions & EslintConfigState
