import { getPackageName } from "./index"

import type { PackageName } from "@shared/types/PackageName"

type TestCase = [string, PackageName]

describe("getPackageName", () => {
  it.each<TestCase>([
    [
      "",
      { category: "------", linter: "eslint", target: "------" },
    ],
    [
      "/",
      { category: "------", linter: "eslint", target: "------" },
    ],
    [
      "/eslint-plugin-all",
      { category: "------", linter: "eslint", target: "------" },
    ],
    [
      "/eslint-config-all",
      { category: "config", linter: "eslint", target: "all" },
    ],
    [
      "/eslint-plugin-js",
      { category: "plugin", linter: "eslint", target: "js" },
    ],
  ])("input が %s の時、 %s を返す", (value, output) => {
    expect(getPackageName(value)).toStrictEqual(output)
  })
})
