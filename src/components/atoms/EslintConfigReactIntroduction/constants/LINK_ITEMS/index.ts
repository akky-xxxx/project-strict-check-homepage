import { pagesPath } from "@lib/$path"

export const LINK_ITEMS = [
  {
    href: pagesPath.packages.eslint_config_sc_js.$url().path,
    label: "eslint-config-sc-js",
  },
  {
    href: "https://www.npmjs.com/package/eslint-plugin-jsx-a11y",
    label: "eslint-plugin-jsx-a11y",
  },
  {
    href: "https://www.npmjs.com/package/eslint-plugin-react",
    label: "eslint-plugin-react",
  },
] as const satisfies Array<Record<"href" | "label", string>>
