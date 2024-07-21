"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

import { usePackageNameStore } from "@shared/storeProviders/packageName"
import { getPackageName } from "@shared/utils/getPackageName"

import type { FC } from "react"

export const SetPackageName: FC = () => {
  const { setPackageName } = usePackageNameStore((store) => store)
  const pathname = usePathname()

  useEffect(() => {
    const packageName = getPackageName(pathname)
    setPackageName(packageName)
  }, [setPackageName, pathname])

  return null
}
