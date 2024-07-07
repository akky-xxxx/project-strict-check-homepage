import { getTheme } from "."

describe("getTheme", () => {
  it.each([
    [undefined, "system"],
    [{ value: "string" }, "system"],
    [{ value: "{\"state\":{\"theme\":\"string\"},\"version\":0}" }, "system"],
    [{ value: "{\"state\":{\"theme\":\"system\"},\"version\":0}" }, "system"],
    [{ value: "{\"state\":{\"theme\":\"light\"},\"version\":0}" }, "light"],
    [{ value: "{\"state\":{\"theme\":\"dark\"},\"version\":0}" }, "dark"],
  ])("input.value が %s の時、 %s を返す", (value, output) => {
    expect(getTheme(value)).toBe(output)
  })
})
