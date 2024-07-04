import { getTheme } from "."

describe("getTheme", () => {
  it.each([
    [undefined, "system"],
    [{ value: "string" }, "system"],
    [{ value: "light" }, "light"],
    [{ value: "dark" }, "dark"],
  ])("input.value が %s の時、 %s を返す", (value, output) => {
    expect(getTheme(value)).toBe(output)
  })
})
