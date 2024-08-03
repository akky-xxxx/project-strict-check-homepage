import { HEADINGS_INFO } from "@shared/constants/HEADINGS_INFO"

import { convertHeadingInfoToSearchDictionary } from "../../../src/components/organisms/SearchModal/components/organisms/SearchModalBase/components/molecules/SearchResult/modules/useSearchResult/modules/convertHeadingInfoToSearchDictionary"
import { searchSite } from "../../../src/components/organisms/SearchModal/components/organisms/SearchModalBase/components/molecules/SearchResult/modules/useSearchResult/modules/searchSite"

const dictionary = convertHeadingInfoToSearchDictionary(HEADINGS_INFO)

// eslint-disable-next-line max-lines-per-function
describe("search results href", () => {
  it("test href for eslint-config", () => {
    const output = [
      "/packages/eslint-config-sc-all#package-name",
      "/packages/eslint-config-sc-all#usage",
      "/packages/eslint-config-sc-all#installation",
      "/packages/eslint-config-sc-all#setup",
      "/packages/eslint-config-sc-all#arguments",
      "/packages/eslint-config-sc-jest#package-name",
      "/packages/eslint-config-sc-jest#usage",
      "/packages/eslint-config-sc-jest#installation",
      "/packages/eslint-config-sc-jest#setup",
      "/packages/eslint-config-sc-js#package-name",
      "/packages/eslint-config-sc-js#usage",
      "/packages/eslint-config-sc-js#installation",
      "/packages/eslint-config-sc-js#setup",
      "/packages/eslint-config-sc-next#package-name",
      "/packages/eslint-config-sc-next#usage",
      "/packages/eslint-config-sc-next#installation",
      "/packages/eslint-config-sc-next#setup",
      "/packages/eslint-config-sc-react#package-name",
      "/packages/eslint-config-sc-react#usage",
      "/packages/eslint-config-sc-react#installation",
      "/packages/eslint-config-sc-react#setup",
      "/packages/eslint-config-sc-storybook#package-name",
      "/packages/eslint-config-sc-storybook#usage",
      "/packages/eslint-config-sc-storybook#installation",
      "/packages/eslint-config-sc-storybook#setup",
      "/packages/eslint-config-sc-ts#package-name",
      "/packages/eslint-config-sc-ts#usage",
      "/packages/eslint-config-sc-ts#installation",
      "/packages/eslint-config-sc-ts#setup",
    ]
    expect(searchSite("eslint-config", dictionary).map(({ href }) => href)).toStrictEqual(output)
  })

  it("test href for eslint-plugin", () => {
    const output = [
      "/packages/eslint-plugin-sc-js#package-name",
      "/packages/eslint-plugin-sc-js#usage",
      "/packages/eslint-plugin-sc-js#installation",
      "/packages/eslint-plugin-sc-js#setup",
      "/packages/eslint-plugin-sc-js#rules",
      "/packages/eslint-plugin-sc-js/rules#rules",
      "/packages/eslint-plugin-sc-js/rules/file-path-patterns#rule-name",
      "/packages/eslint-plugin-sc-js/rules/file-path-patterns#rule-options",
      "/packages/eslint-plugin-sc-js/rules/file-path-patterns#allow-patterns",
      "/packages/eslint-plugin-sc-js/rules/forbidden-multiple-named-exports#rule-name",
      "/packages/eslint-plugin-sc-js/rules/forbidden-multiple-named-exports#rule-options",
      "/packages/eslint-plugin-sc-js/rules/individual-import#rule-name",
      "/packages/eslint-plugin-sc-js/rules/individual-import#rule-options",
      "/packages/eslint-plugin-sc-js/rules/individual-import#targets",
      "/packages/eslint-plugin-sc-js/rules/match-names-of-file-and-export#rule-name",
      "/packages/eslint-plugin-sc-js/rules/match-names-of-file-and-export#rule-options",
      "/packages/eslint-plugin-sc-js/rules/match-names-of-file-and-export#captures",
      "/packages/eslint-plugin-sc-js/rules/restrict-use-of-process-env#rule-name",
      "/packages/eslint-plugin-sc-js/rules/restrict-use-of-process-env#rule-options",
    ]
    expect(searchSite("eslint-plugin", dictionary).map(({ href }) => href)).toStrictEqual(output)
  })
})
