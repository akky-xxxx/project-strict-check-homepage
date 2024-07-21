import { TowColumnsLayout } from "../../components/atoms/TwoColumnsLayout"

import type { FCWithChildren } from "@shared/types/FCWithChildren"

const PackagesLayout: FCWithChildren = (props) => {
  const { children } = props

  return (
    <TowColumnsLayout>
      {children}
    </TowColumnsLayout>
  )
}

export default PackagesLayout
