import { PackageNameProvider } from "@shared/storeProviders/packageName"
import { ThemeProvider } from "@shared/storeProviders/theme"

import { Header } from "./components/molecules/Header"
import { SetPackageName } from "./components/organisms/SetPackageName"

import type { PackageName } from "@shared/types/PackageName"
import type { Theme } from "@shared/types/Theme"
import type { FC } from "react"

type Props = {
  packageName: PackageName
  theme: Theme
}

export const Layout: FC<Props> = (props) => {
  const { packageName, theme } = props

  return (
    <ThemeProvider theme={theme}>
      <PackageNameProvider packageName={packageName}>
        <SetPackageName />
        <Header />
      </PackageNameProvider>
    </ThemeProvider>
  )
}
