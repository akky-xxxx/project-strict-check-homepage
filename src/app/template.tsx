import { cookies } from "next/headers"
import { pathname } from "next-extra/pathname"
import { Fragment } from "react"

import { COOKIE_KEY_THEME } from "@shared/constants/COOKIE_KEYS"
import { PackageNameProvider } from "@shared/storeProviders/packageName"
import { ThemeProvider } from "@shared/storeProviders/theme"
import { getPackageName } from "@shared/utils/getPackageName"

import { getTheme } from "./modules/getTheme"
import { Header } from "../components/molecules/Header"
import { SetPackageName } from "../components/organisms/SetPackageName"

import type { FCWithChildren } from "@shared/types/FCWithChildren"

import "./globals.css"

const RootLayout: FCWithChildren = (props) => {
  const { children } = props
  const theme = getTheme(cookies().get(COOKIE_KEY_THEME))
  const packageName = getPackageName(pathname())

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <PackageNameProvider packageName={packageName}>
          <SetPackageName />
          <Header hasPackageSelector />
        </PackageNameProvider>
      </ThemeProvider>
      <div>
        {children}
      </div>
    </Fragment>
  )
}

export default RootLayout
