import type { SearchDictionary } from "@shared/types/SearchDictionary"

type Item = Record<"href" | "text" | "title", string>

type SearchSite = (searchWord: string, dictionary: SearchDictionary) => Item[]

const REPLACE_VALUE = "<mark>$1</mark>"

export const searchSite: SearchSite = (searchWord, dictionary) => {
  if (searchWord === "") return []
  const searchWordRegExp = new RegExp(`(${searchWord})`, "gi")

  return dictionary.reduce<Item[]>((previousValue, item) => {
    const { href, text, title } = item
    const matchedTitle = searchWordRegExp.test(title)
    const matchedTexts = searchWordRegExp.test(text)
    if (!matchedTitle && !matchedTexts) return previousValue

    const markedUpTitle = title.replaceAll(searchWordRegExp, REPLACE_VALUE)
    const markedUpText = text.replaceAll(searchWordRegExp, REPLACE_VALUE)
    return [
      ...previousValue,
      {
        href,
        text: markedUpText,
        title: markedUpTitle,
      },
    ]
  }, [])
}
