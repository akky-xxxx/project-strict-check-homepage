type Item = Record<"href" | "name" | "searchTitle", string>

// ネストが多く分かりづらいので
/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
export type HeadingsInfo = {
  [PACKAGE_NAME: Uppercase<string>]: {
    [PAGE_NAME: Uppercase<string>]: {
      [ITEM_NAME: Uppercase<string>]: Item
    }
  }
}
