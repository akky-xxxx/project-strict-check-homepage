import { getPackageNameItems } from "."

describe("getPackageNameItem", () => {
  it("戻り値は %s", () => {
    const output = [
      "------",
      "eslint-config-sc-all",
      "eslint-config-sc-jest",
      "eslint-config-sc-js",
      "eslint-config-sc-next",
      "eslint-config-sc-react",
      "eslint-config-sc-storybook",
      "eslint-config-sc-ts",
      "eslint-plugin-sc-js",
    ]
    expect(getPackageNameItems()).toStrictEqual(output)
  })
})
