"use client"

import { cx } from "@panda/css"

import { useThemeSwitch } from "./modules/useThemeSwitch"
import { styles } from "./styles"

import type { Theme } from "@shared/types/Theme"
import type { FC } from "react"

type Props = {
  themeFromServerCookie: Theme
}

export const ThemeSwitch: FC<Props> = (props) => {
  const { themeFromServerCookie } = props
  const {
    activeButtons,
    handleSelectTheme,
    master,
    selectedTheme,
  } = useThemeSwitch({ themeFromServerCookie })

  return (
    <div className={cx(styles.frame, "ThemeSwitch", "group")}>
      <div className={styles.root}>
        {master.map((record) => {
          const { icon, theme } = record
          const isChecked = theme === selectedTheme

          return (
            <label key={theme} className={styles.label}>
              <span className={styles.labelIcon}>{icon}</span>
              <input
                aria-label={`${theme} theme`}
                checked={isChecked}
                className={cx(styles.input, isChecked && styles.checkedInput)}
                name="theme"
                type="radio"
                value={theme}
                onChange={handleSelectTheme}
              />
            </label>
          )
        })}
        <div className={cx(...activeButtons)}>
          {master.map((record) => {
            const { icon, iconWrapperStyles, theme } = record

            return (
              <div key={theme} className={cx(...iconWrapperStyles)}>
                {icon}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
