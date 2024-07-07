import { changeTheme } from "."

import type { Theme } from "@shared/types/Theme"

type TestCaseByTheme = Record<"theme", Theme>

const TEST_CASES_BY_THEME = [
  { theme: "dark" },
  { theme: "light" },
  { theme: "system" },
] as const satisfies TestCaseByTheme[]

describe("changeTheme", () => {
  describe("test cases for the change html attribute", () => {
    let querySelectorSpy: jest.SpyInstance<Element | null>
    let setAttributeSpy: jest.SpyInstance<Element | [string, string]>
    let mockElement: HTMLElementTagNameMap["div"]

    beforeEach(() => {
      querySelectorSpy = jest.spyOn(document, "querySelector")
      mockElement = document.createElement<"div">("div")
      querySelectorSpy.mockReturnValue(mockElement)
      setAttributeSpy = jest.spyOn(mockElement, "setAttribute")
    })

    afterEach(() => {
      querySelectorSpy.mockReset()
      setAttributeSpy.mockReset()
    })

    it('call querySelector with "html" as argument when run changeTheme at one time', () => {
      changeTheme("dark")
      expect(querySelectorSpy).toHaveBeenCalledWith("html")
      expect(querySelectorSpy).toHaveBeenCalledTimes(1)
    })

    it.each<TestCaseByTheme>(
      TEST_CASES_BY_THEME,
    )('call setAttribute with "data-theme, $theme" when run changeTheme($theme)', ({ theme }) => {
      changeTheme(theme)
      expect(setAttributeSpy).toHaveBeenCalledWith("data-theme", theme)
      expect(querySelectorSpy).toHaveBeenCalledTimes(1)
    })
  })
})
