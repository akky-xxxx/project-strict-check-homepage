import NextLink from "next/link"

import { EXTERNAL_LINK_ATTRIBUTES } from "@shared/constants/EXTERNAL_LINK_ATTRIBUTES"
import { link } from "@shared/styles/link"

import type { FCWithChildren } from "@shared/types/FCWithChildren"

type Props = {
  href: string
  isExternal?: boolean | undefined
}

export const Link: FCWithChildren<Props> = (props) => {
  const { children, href, isExternal = false } = props
  const commonAttributes = { className: link, href }

  if (isExternal) {
    return (
      <a {...EXTERNAL_LINK_ATTRIBUTES} {...commonAttributes}>{children}</a>
    )
  }

  return <NextLink {...commonAttributes}>{children}</NextLink>
}
