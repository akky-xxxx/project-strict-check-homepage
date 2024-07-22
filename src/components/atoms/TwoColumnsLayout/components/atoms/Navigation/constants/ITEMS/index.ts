import { pagesPath } from "@lib/$path"

type Item = Record<"href" | "label", string> & {
  childList?: Item[]
}

export const ITEMS = [
  {
    href: pagesPath.$url().path,
    label: "Home",
  },
  {
    href: pagesPath.packages.$url().path,
    label: "Packages",
  },
  {
    href: pagesPath.packages.eslint_config_sc_all.$url().path,
    label: "eslint-config-sc-all",
  },
  {
    href: pagesPath.packages.eslint_config_sc_js.$url().path,
    label: "eslint-config-sc-js",
  },
  {
    href: pagesPath.packages.eslint_config_sc_ts.$url().path,
    label: "eslint-config-sc-ts",
  },
  {
    href: pagesPath.packages.eslint_config_sc_jest.$url().path,
    label: "eslint-config-sc-jest",
  },
  {
    href: pagesPath.packages.eslint_config_sc_react.$url().path,
    label: "eslint-config-sc-react",
  },
  {
    href: pagesPath.packages.eslint_config_sc_next.$url().path,
    label: "eslint-config-sc-next",
  },
  {
    href: pagesPath.packages.eslint_config_sc_storybook.$url().path,
    label: "eslint-config-sc-storybook",
  },
  {
    childList: [
      {
        childList: [
          {
            href: pagesPath.packages.eslint_plugin_sc_js.rules.file_path_patterns.$url().path,
            label: "file-path-patterns",
          },
          {
            // eslint-disable-next-line @stylistic/max-len
            href: pagesPath.packages.eslint_plugin_sc_js.rules.forbidden_multiple_named_exports.$url().path,
            label: "forbidden-multiple-named-exports",
          },
        ],
        href: pagesPath.packages.eslint_plugin_sc_js.rules.$url().path,
        label: "rules",
      },
    ],
    href: pagesPath.packages.eslint_plugin_sc_js.$url().path,
    label: "eslint-plugin-sc-js",
  },
] as const satisfies Item[]
