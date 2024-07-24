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
      "/packages/eslint-plugin-all",
      { category: "------", linter: "eslint", target: "------" },
    ],
    [
      "/packages/eslint-config-sc-all",
      { category: "config", linter: "eslint", target: "sc-all" },
    ],
    [
      "/packages/eslint-plugin-sc-js",
      { category: "plugin", linter: "eslint", target: "sc-js" },
    ],
    [
      "/packages/eslint-plugin-sc-js/rules",
      { category: "plugin", linter: "eslint", target: "sc-js" },
    ],
    [
      "/packages/eslint-plugin-sc-js/rules/some-rule-name",
      { category: "plugin", linter: "eslint", target: "sc-js" },
    ],
  ])("input が %s の時、 %s を返す", (value, output) => {
    expect(getPackageName(value)).toStrictEqual(output)
  })
})
