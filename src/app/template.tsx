import { cookies } from "next/headers"
import { pathname } from "next-extra/pathname"
import { Fragment } from "react"

import { COOKIE_KEY_THEME } from "@shared/constants/COOKIE_KEYS"
import { getPackageName } from "@shared/utils/getPackageName"

import { getTheme } from "./modules/getTheme"
import { Main } from "../components/atoms/Main"
import { Layout } from "../components/organisms/Layout"

import type { FCWithChildren } from "@shared/types/FCWithChildren"

import "./globals.css"

const RootLayout: FCWithChildren = (props) => {
  const { children } = props
  const theme = getTheme(cookies().get(COOKIE_KEY_THEME))
  const packageName = getPackageName(pathname())

  return (
    <Fragment>
      <Layout packageName={packageName} theme={theme} />
      <Main>
        {children}
      </Main>
    </Fragment>
  )
}

export default RootLayout
