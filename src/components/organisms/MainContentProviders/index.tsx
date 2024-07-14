import { EslintConfigProvider } from "@shared/storeProviders/eslintConfig"

import type { FCWithChildren } from "@shared/types/FCWithChildren"
import type { ComponentProps } from "react"

type Props = ComponentProps<typeof EslintConfigProvider>

export const MainContentProviders: FCWithChildren<Props> = (props) => {
  const { children, eslintConfig } = props

  return (
    <EslintConfigProvider eslintConfig={eslintConfig}>
      {children}
    </EslintConfigProvider>
  )
}
