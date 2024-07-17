import { getPackageNameItems } from "."

describe("getPackageNameItem", () => {
  it("戻り値は %s", () => {
    const output = [
      "eslint-config-all",
      "eslint-config-jest",
      "eslint-config-js",
      "eslint-config-next",
      "eslint-config-react",
      "eslint-config-storybook",
      "eslint-config-ts",
      "eslint-plugin-js",
    ]
    expect(getPackageNameItems()).toStrictEqual(output)
  })
})
