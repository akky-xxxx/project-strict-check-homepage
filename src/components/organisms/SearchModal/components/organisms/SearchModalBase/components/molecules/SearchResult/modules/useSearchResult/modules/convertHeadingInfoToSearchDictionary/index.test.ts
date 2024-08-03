import { convertHeadingInfoToSearchDictionary } from "."

import type { HeadingsInfo } from "@shared/types/HeadingsInfo"
import type { SearchDictionary } from "@shared/types/SearchDictionary"

const input = {
  ESLINT_CONFIG_ALL: {
    HOME: {
      PAGE_TITLE: {
        name: "h1",
        href: "hash1",
        searchTitle: "PAGE_NAME",
      },
      SETUP: {
        name: "h2",
        href: "hash2",
        searchTitle: "PAGE_NAME",
      },
      ARGUMENTS: {
        name: "page",
        href: "hash3",
        searchTitle: "PAGE_NAME > Setup",
      },
    },
  },
} satisfies HeadingsInfo

const DICTIONARY = [
  {
    href: "hash1",
    text: "h1",
    title: "PAGE_NAME",
  },
  {
    href: "hash2",
    text: "h2",
    title: "PAGE_NAME",
  },
  {
    href: "hash3",
    text: "page",
    title: "PAGE_NAME > Setup",
  },
] as const satisfies SearchDictionary

describe("convertHeadingInfoToSearchDictionary", () => {
  it("test", () => {
    expect(convertHeadingInfoToSearchDictionary(input)).toStrictEqual(DICTIONARY)
  })
})
