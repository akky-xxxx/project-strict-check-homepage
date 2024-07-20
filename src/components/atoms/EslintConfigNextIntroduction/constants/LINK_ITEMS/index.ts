import { pagesPath } from "@lib/$path"

export const LINK_ITEMS = [
  {
    href: "https://www.npmjs.com/package/eslint-config-next",
    label: "eslint-config-next",
  },
  {
    href: pagesPath.packages.eslint_config_sc_react.$url().path,
    label: "eslint-config-sc-react",
  },
] as const satisfies Array<Record<"href" | "label", string>>
