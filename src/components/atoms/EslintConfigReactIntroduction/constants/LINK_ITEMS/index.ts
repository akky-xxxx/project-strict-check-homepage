import { pagesPath } from "@lib/$path"

export const LINK_ITEMS = [
  {
    href: "https://www.npmjs.com/package/eslint-plugin-react",
    label: "eslint-plugin-react",
  },
  {
    href: "https://www.npmjs.com/package/eslint-plugin-react-hook",
    label: "eslint-plugin-react-hook",
  },
  {
    href: pagesPath.packages.eslint_config_sc_js.$url().path,
    label: "eslint-config-sc-js",
  },
] as const satisfies Array<Record<"href" | "label", string>>
