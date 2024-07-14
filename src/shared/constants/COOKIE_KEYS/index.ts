import type { nextCookiesSchemas } from "../../schemas/nextCookiesSchemas"

type CookieKey = keyof typeof nextCookiesSchemas

/* eslint-disable sc-js/forbidden-multiple-named-exports */
export const COOKIE_KEY_ESLINT_CONFIG = "eslintConfig" satisfies CookieKey
export const COOKIE_KEY_THEME = "theme" satisfies CookieKey
