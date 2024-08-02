import type { HeadingsInfo } from "@shared/types/HeadingsInfo"
import type { SearchDictionary } from "@shared/types/SearchDictionary"

export const convertHeadingInfoToSearchDictionary = (data: HeadingsInfo): SearchDictionary =>
  /* eslint-disable implicit-arrow-linebreak */
  Object.values(data).flatMap((pageNames) =>
    Object.values(pageNames).flatMap((items) =>
      Object.values(items).flatMap((item) => {
        const { href, searchTitle, name } = item
        return { href, text: name, title: searchTitle }
      })))
