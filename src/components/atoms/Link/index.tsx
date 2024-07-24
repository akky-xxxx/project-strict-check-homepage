import { EXTERNAL_LINK_ATTRIBUTES } from "@shared/constants/EXTERNAL_LINK_ATTRIBUTES"
import { link } from "@shared/styles/link"

import { NextLink } from "../NextLink"

import type { FCWithChildren } from "@shared/types/FCWithChildren"

type Props = {
  href: string
}

export const Link: FCWithChildren<Props> = (props) => {
  const { children, href } = props
  const commonAttributes = { className: link, href }
  const isExternal = href.startsWith("http")

  if (isExternal) {
    return (
      <a {...EXTERNAL_LINK_ATTRIBUTES} {...commonAttributes}>{children}</a>
    )
  }

  return <NextLink {...commonAttributes}>{children}</NextLink>
}
