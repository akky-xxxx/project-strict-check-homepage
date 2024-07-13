"use client"

import { useEffect } from "react"

import { usePackageNameStore } from "@shared/storeProviders/packageName"
import { getPackageName } from "@shared/utils/getPackageName"

import type { FC } from "react"

export const SetPackageName: FC = () => {
  const { setPackageName } = usePackageNameStore((store) => store)

  useEffect(() => {
    const parsedURL = new URL(window.location.href)
    const packageName = getPackageName(parsedURL.pathname)
    setPackageName(packageName)
  }, [setPackageName])

  return null
}
