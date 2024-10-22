import { Inter } from "next/font/google"
import { cookies } from "next/headers"
import { Toaster } from "react-hot-toast"

import { css } from "@panda/css"
import { COOKIE_KEY_PACKAGE_MANAGER, COOKIE_KEY_THEME } from "@shared/constants/COOKIE_KEYS"
import { getMetadata } from "@shared/utils/getMetadata"

import { getPackageManager } from "./modules/getPackageManager"
import { getTheme } from "./modules/getTheme"
import { Footer } from "../components/atoms/Footer"
import { MainContentProviders } from "../components/organisms/MainContentProviders"

import type { FCWithChildren } from "@shared/types/FCWithChildren"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = getMetadata({
  description: "SC series is the packages for static analysis that keep maintainability on operation and development for the frontend developer.",
})

const RootLayout: FCWithChildren = (props) => {
  const { children } = props
  const cookieObject = cookies()
  const theme = getTheme(cookieObject.get(COOKIE_KEY_THEME))
  const packageManager = getPackageManager(cookieObject.get(COOKIE_KEY_PACKAGE_MANAGER))

  return (
    <html data-theme={theme} lang="en">
      <body className={inter.className}>
        <div className={bodyInner}>
          <div className={mainContentsWrapper}>
            <MainContentProviders packageManager={packageManager}>
              {children}
              <Toaster />
            </MainContentProviders>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default RootLayout

const bodyInner = css({
  display: "flex",
  flexDirection: "column",
  minHeight: "100dvh",
})

const mainContentsWrapper = css({
  marginBottom: "auto",
})
