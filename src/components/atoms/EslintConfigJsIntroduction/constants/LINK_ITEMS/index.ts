export const LINK_ITEMS = [
  {
    href: "https://eslint.org/",
    label: "ESLint",
  },
  {
    href: "https://www.npmjs.com/package/eslint-plugin-import",
    label: "eslint-plugin-import",
  },
  {
    href: "https://www.npmjs.com/package/eslint-plugin-unicorn",
    label: "eslint-plugin-unicorn",
  },
] as const satisfies Array<Record<"href" | "label", string>>
