import { PackageNameProvider } from "@shared/storeProviders/packageName"
import { ThemeProvider } from "@shared/storeProviders/theme"

import { Header } from "./components/molecules/Header"
import { SetPackageName } from "./components/organisms/SetPackageName"

import type { FCWithChildren } from "@shared/types/FCWithChildren"
import type { PackageName } from "@shared/types/PackageName"
import type { Theme } from "@shared/types/Theme"

type Props = {
  packageName: PackageName
  theme: Theme
}

export const Layout: FCWithChildren<Props> = (props) => {
  const { children, packageName, theme } = props

  return (
    <ThemeProvider theme={theme}>
      <PackageNameProvider packageName={packageName}>
        <SetPackageName />
        <Header />
        {children}
      </PackageNameProvider>
    </ThemeProvider>
  )
}
