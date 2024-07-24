import { pagesPath } from "@lib/$path"

export const LINK_ITEMS = [
  {
    href: pagesPath.packages.eslint_config_sc_jest.$url().path,
    label: "eslint-config-sc-jest",
  },
  {
    href: pagesPath.packages.eslint_config_sc_js.$url().path,
    label: "eslint-config-sc-js",
  },
  {
    href: pagesPath.packages.eslint_config_sc_next.$url().path,
    label: "eslint-config-sc-next",
  },
  {
    href: pagesPath.packages.eslint_config_sc_react.$url().path,
    label: "eslint-config-sc-react",
  },
  {
    href: pagesPath.packages.eslint_config_sc_storybook.$url().path,
    label: "eslint-config-sc-storybook",
  },
  {
    href: pagesPath.packages.eslint_config_sc_ts.$url().path,
    label: "eslint-config-sc-ts",
  },
] as const satisfies Array<Record<"href" | "label", string>>
