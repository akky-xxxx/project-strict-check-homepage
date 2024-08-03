import { convertHeadingInfoToSearchDictionary } from "."

import type { HeadingsInfo } from "@shared/types/HeadingsInfo"
import type { SearchDictionary } from "@shared/types/SearchDictionary"

const input = {
  ESLINT_CONFIG_ALL: {
    HOME: {
      PAGE_TITLE: {
        name: "h1",
        hash: "hash1",
        href: "href1",
        searchTitle: "PAGE_NAME",
      },
      SETUP: {
        name: "h2",
        hash: "hash2",
        href: "href2",
        searchTitle: "PAGE_NAME",
      },
      ARGUMENTS: {
        name: "page",
        hash: "hash3",
        href: "href3",
        searchTitle: "PAGE_NAME > Setup",
      },
    },
  },
} satisfies HeadingsInfo

const DICTIONARY = [
  {
    hash: "hash1",
    href: "href1",
    text: "h1",
    title: "PAGE_NAME",
  },
  {
    hash: "hash2",
    href: "href2",
    text: "h2",
    title: "PAGE_NAME",
  },
  {
    hash: "hash3",
    href: "href3",
    text: "page",
    title: "PAGE_NAME > Setup",
  },
] as const satisfies SearchDictionary

describe("convertHeadingInfoToSearchDictionary", () => {
  it("test", () => {
    expect(convertHeadingInfoToSearchDictionary(input)).toStrictEqual(DICTIONARY)
  })
})
