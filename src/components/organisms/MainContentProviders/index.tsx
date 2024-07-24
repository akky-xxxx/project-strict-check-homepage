import { EslintConfigProvider } from "@shared/storeProviders/eslintConfig"
import { PackageManagerProvider } from "@shared/storeProviders/packageManager"

import type { FCWithChildren } from "@shared/types/FCWithChildren"
import type { ComponentProps } from "react"

type Props = ComponentProps<typeof EslintConfigProvider> &
  ComponentProps<typeof PackageManagerProvider>

export const MainContentProviders: FCWithChildren<Props> = (props) => {
  const { children, eslintConfig, packageManager } = props

  return (
    <PackageManagerProvider packageManager={packageManager}>
      <EslintConfigProvider eslintConfig={eslintConfig}>
        {children}
      </EslintConfigProvider>
    </PackageManagerProvider>
  )
}
