import { cookies } from "next/headers"

import { COOKIE_KEY_THEME } from "@shared/constants/COOKIE_KEYS"

import { getTheme } from "./modules/getTheme"
import { Main } from "../components/atoms/Main"
import { Layout } from "../components/organisms/Layout"

import type { AsyncFCWithChildren } from "@shared/types/AsyncFCWithChildren"

import "./globals.css"

const RootLayout: AsyncFCWithChildren = async (props) => {
  const { children } = props
  const cookieObject = await cookies()
  const theme = getTheme(cookieObject.get(COOKIE_KEY_THEME))

  return (
    <Layout theme={theme}>
      <Main>
        {children}
      </Main>
    </Layout>
  )
}

export default RootLayout
