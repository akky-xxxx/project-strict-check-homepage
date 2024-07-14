import { getPackageManager } from "."

describe("getTheme", () => {
  it.each([
    [undefined, "npm"],
    [{ value: "string" }, "npm"],
    [{ value: "{\"state\":{\"packageManager\":\"npm\"},\"version\":0}" }, "npm"],
    [{ value: "{\"state\":{\"packageManager\":\"yarn\"},\"version\":0}" }, "yarn"],
    [{ value: "{\"state\":{\"packageManager\":\"pnpm\"},\"version\":0}" }, "pnpm"],
    [{ value: "{\"state\":{\"packageManager\":\"bun\"},\"version\":0}" }, "bun"],
  ])("input.value が %s の時、 %s を返す", (value, output) => {
    expect(getPackageManager(value)).toBe(output)
  })
})
