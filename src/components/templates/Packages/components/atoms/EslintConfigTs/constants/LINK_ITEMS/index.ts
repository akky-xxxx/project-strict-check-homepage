export const LINK_ITEMS = [
  {
    href: "https://typescript-eslint.io/",
    isExternal: true,
    label: "typescript-eslint",
  },
  {
    href: "/packages/eslint-config-sc-js",
    label: "eslint-config-sc-js",
  },
] as const satisfies Array<Record<"href" | "label", string> & { isExternal?: boolean }>
