import type { nextCookiesSchemas } from "../../schemas/nextCookiesSchemas"

type CookieKey = keyof typeof nextCookiesSchemas

export const COOKIE_KEY_THEME = "theme" satisfies CookieKey
