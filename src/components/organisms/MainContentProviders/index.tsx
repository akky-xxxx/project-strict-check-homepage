import { PackageManagerProvider } from "@shared/storeProviders/packageManager"

import type { FCWithChildren } from "@shared/types/FCWithChildren"
import type { ComponentProps } from "react"

type Props = ComponentProps<typeof PackageManagerProvider>

export const MainContentProviders: FCWithChildren<Props> = (props) => {
  const { children, packageManager } = props

  return (
    <PackageManagerProvider packageManager={packageManager}>
      {children}
    </PackageManagerProvider>
  )
}
