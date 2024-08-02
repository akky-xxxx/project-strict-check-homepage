import { createPortal } from "react-dom"

import type { FCWithChildren } from "@shared/types/FCWithChildren"

export const Portal: FCWithChildren = (props) => {
  const { children } = props
  return createPortal(children, document.body)
}
