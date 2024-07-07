import { useState } from "react"

import { changeTheme } from "./modules/changeTheme"
import { getStyles } from "./modules/getStyles"
import { isThemeWord } from "./modules/isThemeWord"
import { HalfIcon } from "../../components/atoms/HalfIcon"
import { MoonIcon } from "../../components/atoms/MoonIcon"
import { SunIcon } from "../../components/atoms/SunIcon"

import type { Theme } from "@shared/types/Theme"
import type { ChangeEventHandler, ReactNode } from "react"

type UseThemeSwitchInput = {
  themeFromServerCookie: Theme
}

type MasterRecord = {
  icon: ReactNode
  iconWrapperStyles: Array<string | false>
  theme: Theme
}

export const useThemeSwitch = (input: UseThemeSwitchInput) => {
  const { themeFromServerCookie } = input
  const [selectedTheme, setSelectedTheme] = useState<Theme>(themeFromServerCookie)
  const handleSelectTheme: ChangeEventHandler<HTMLInputElement> = (event) => {
    const {
      currentTarget: { value },
    } = event
    if (!isThemeWord(value)) return
    setSelectedTheme(value)
    changeTheme(value)
  }

  const {
    activeButtons,
    darkIconStyles,
    lightIconStyles,
    systemIconStyles,
  } = getStyles(selectedTheme)

  const master = [
    {
      icon: <SunIcon height={20} width={20} />,
      iconWrapperStyles: lightIconStyles,
      theme: "light",
    },
    {
      icon: <MoonIcon height={20} width={20} />,
      iconWrapperStyles: darkIconStyles,
      theme: "dark",
    },
    {
      icon: <HalfIcon height={20} width={20} />,
      iconWrapperStyles: systemIconStyles,
      theme: "system",
    },
  ] as const satisfies MasterRecord[]

  return {
    activeButtons,
    handleSelectTheme,
    master,
    selectedTheme,
  }
}
