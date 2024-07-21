"use client"

import { usePathname } from "next/navigation"

import { NavigationMain } from "./components/atoms/NavigationMain"
import { ITEMS } from "./constants/ITEMS"

import type { FC } from "react"

export const Navigation: FC = () => {
  const pathname = usePathname()

  return (
    <nav>
      <NavigationMain items={ITEMS} pathname={pathname} />
    </nav>
  )
}
