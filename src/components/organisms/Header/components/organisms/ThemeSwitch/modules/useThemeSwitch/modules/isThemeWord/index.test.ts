import { isThemeWord } from "."

import type { Theme } from "../../../../../../../shared/types/Theme"

describe("isThemeWord", () => {
  describe("success pattern", () => {
    it.each<Theme>(
      ["dark", "light", "system"],
    )("Return the true when argument is %s", (input) => {
      expect(isThemeWord(input)).toBeTruthy()
    })
  })
  describe("failure pattern", () => {
    it.each<string>(
      ["a", "right", ""],
    )("Return the false when argument is %s", (input) => {
      expect(isThemeWord(input)).toBeFalsy()
    })
  })
})
