import type { Theme } from "../../../../../../../../../../../../../shared/types/Theme"

const ThemeValues: string[] = ["dark", "light", "system"] satisfies Theme[]
export const isThemeWord = (input: string): input is Theme => ThemeValues.includes(input)
