import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

import type { FCWithChildren } from "@shared/types/FCWithChildren"

export const Portal: FCWithChildren = (props) => {
  const { children } = props
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return createPortal(children, document.body)
}
