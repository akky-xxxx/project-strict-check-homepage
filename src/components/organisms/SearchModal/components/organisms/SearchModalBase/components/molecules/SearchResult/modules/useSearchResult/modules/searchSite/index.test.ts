import { searchSite } from "./index"

import type { SearchDictionary } from "@shared/types/SearchDictionary"

type SearchSite = typeof searchSite
type Input = Parameters<SearchSite>[0]
type Return = ReturnType<SearchSite>
type TestCase = [Input, Return]

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
    title: "PAGE_NAME",
  },
] as const satisfies SearchDictionary

const TEST_CASES = [
  [
    "PAGE_NAME",
    [
      {
        href: "href1#hash1",
        text: "h1",
        title: "<mark>PAGE_NAME</mark>",
      },
      {
        href: "href2#hash2",
        text: "h2",
        title: "<mark>PAGE_NAME</mark>",
      },
      {
        href: "href3#hash3",
        text: "page",
        title: "<mark>PAGE_NAME</mark>",
      },
    ],
  ],
  [
    "PAGE",
    [
      {
        href: "href1#hash1",
        text: "h1",
        title: "<mark>PAGE</mark>_NAME",
      },
      {
        href: "href2#hash2",
        text: "h2",
        title: "<mark>PAGE</mark>_NAME",
      },
      {
        href: "href3#hash3",
        text: "<mark>page</mark>",
        title: "<mark>PAGE</mark>_NAME",
      },
    ],
  ],
  [
    "A",
    [
      {
        href: "href1#hash1",
        text: "h1",
        title: "P<mark>A</mark>GE_N<mark>A</mark>ME",
      },
      {
        href: "href2#hash2",
        text: "h2",
        title: "P<mark>A</mark>GE_N<mark>A</mark>ME",
      },
      {
        href: "href3#hash3",
        text: "p<mark>a</mark>ge",
        title: "P<mark>A</mark>GE_N<mark>A</mark>ME",
      },
    ],
  ],
  [
    "h",
    [
      {
        href: "href1#hash1",
        text: "<mark>h</mark>1",
        title: "PAGE_NAME",
      },
      {
        href: "href2#hash2",
        text: "<mark>h</mark>2",
        title: "PAGE_NAME",
      },
    ],
  ],
  [
    "123",
    [],
  ],
  [
    "",
    [],
  ],
] satisfies TestCase[]

describe("searchSite", () => {
  it.each<TestCase>(TEST_CASES)("引数が%sの時、%oを返す", (input, output) => {
    expect(searchSite(input, DICTIONARY)).toStrictEqual(output)
  })
})
