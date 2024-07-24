import { getEslintConfig } from "."

describe("getTheme", () => {
  it.each([
    [undefined, "flat"],
    [{ value: "string" }, "flat"],
    [{ value: "{\"state\":{\"eslintConfig\":\"flat\"},\"version\":0}" }, "flat"],
    [{ value: "{\"state\":{\"eslintConfig\":\"legacy\"},\"version\":0}" }, "legacy"],
  ])("input.value が %s の時、 %s を返す", (value, output) => {
    expect(getEslintConfig(value)).toBe(output)
  })
})
