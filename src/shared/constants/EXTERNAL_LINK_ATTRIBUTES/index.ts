import type { AnchorHTMLAttributes } from "react"

export const EXTERNAL_LINK_ATTRIBUTES = {
  /* cspell:disable-next-line */
  rel: "noopener noreferrer",
  target: "_blank",
} as const satisfies AnchorHTMLAttributes<HTMLAnchorElement>
