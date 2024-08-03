import { PackageNameProvider } from "@shared/storeProviders/packageName"
import { ThemeProvider } from "@shared/storeProviders/theme"

import { Header } from "./components/molecules/Header"
import { SetPackageName } from "./components/organisms/SetPackageName"
import { SearchModal } from "../SearchModal"

import type { FCWithChildren } from "@shared/types/FCWithChildren"
import type { Theme } from "@shared/types/Theme"

type Props = {
  theme: Theme
}

export const Layout: FCWithChildren<Props> = (props) => {
  const { children, theme } = props

  return (
    <ThemeProvider theme={theme}>
      <PackageNameProvider>
        <SetPackageName />
        <Header />
        {children}
        <SearchModal />
      </PackageNameProvider>
    </ThemeProvider>
  )
}
