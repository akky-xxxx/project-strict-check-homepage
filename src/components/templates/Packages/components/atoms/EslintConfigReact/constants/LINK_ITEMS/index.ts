export const LINK_ITEMS = [
  {
    href: "https://www.npmjs.com/package/eslint-plugin-react",
    isExternal: true,
    label: "eslint-plugin-react",
  },
  {
    href: "https://www.npmjs.com/package/eslint-plugin-react-hook",
    isExternal: true,
    label: "eslint-plugin-react-hook",
  },
  {
    href: "/packages/eslint-config-sc-js",
    label: "eslint-config-sc-js",
  },
] as const satisfies Array<Record<"href" | "label", string> & { isExternal?: boolean }>
