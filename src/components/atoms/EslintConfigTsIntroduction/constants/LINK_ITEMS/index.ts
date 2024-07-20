import { pagesPath } from "@lib/$path"

export const LINK_ITEMS = [
  {
    href: "https://typescript-eslint.io/",
    isExternal: true,
    label: "typescript-eslint",
  },
  {
    href: pagesPath.packages.eslint_config_sc_js.$url().path,
    label: "eslint-config-sc-js",
  },
] as const satisfies Array<Record<"href" | "label", string> & { isExternal?: boolean }>
