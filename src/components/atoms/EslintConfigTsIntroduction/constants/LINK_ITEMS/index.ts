import { pagesPath } from "@lib/$path"

export const LINK_ITEMS = [
  {
    href: pagesPath.packages.eslint_config_sc_js.$url().path,
    label: "eslint-config-sc-js",
  },
  {
    href: "https://www.npmjs.com/package/eslint-import-resolver-typescript",
    label: "eslint-import-resolver-typescript",
  },
  {
    href: "https://typescript-eslint.io/",
    label: "typescript-eslint",
  },
] as const satisfies Array<Record<"href" | "label", string>>
