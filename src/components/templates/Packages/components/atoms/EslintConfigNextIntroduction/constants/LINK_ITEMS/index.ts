export const LINK_ITEMS = [
  {
    href: "https://www.npmjs.com/package/eslint-config-next",
    isExternal: true,
    label: "eslint-config-next",
  },
  {
    href: "/packages/eslint-config-sc-react",
    label: "eslint-config-sc-react",
  },
] as const satisfies Array<Record<"href" | "label", string> & { isExternal?: boolean }>
