export const LINK_ITEMS = [
  {
    href: "https://eslint.org/",
    label: "ESLint",
  },
  {
    href: "https://eslint.style/",
    label: "ESLint Stylistic",
  },
  {
    href: "https://www.npmjs.com/package/eslint-config-airbnb",
    label: "eslint-config-airbnb",
  },
  {
    href: "https://www.npmjs.com/package/eslint-plugin-unicorn",
    label: "eslint-plugin-unicorn",
  },
] as const satisfies Array<Record<"href" | "label", string>>
