import { cookies } from "next/headers"

import { COOKIE_KEY_THEME } from "@shared/constants/COOKIE_KEYS"

import { getTheme } from "./modules/getTheme"
import { Main } from "../components/atoms/Main"
import { Layout } from "../components/organisms/Layout"

import type { FCWithChildren } from "@shared/types/FCWithChildren"

import "./globals.css"

const RootLayout: FCWithChildren = (props) => {
  const { children } = props
  const theme = getTheme(cookies().get(COOKIE_KEY_THEME))

  return (
    <Layout theme={theme}>
      <Main>
        {children}
      </Main>
    </Layout>
  )
}

export default RootLayout
