import { getMetadata } from "@shared/utils/getMetadata"

import { Packages } from "../../components/templates/Packages"

import type { FC } from "react"

export const runtime = "edge"

export const metadata = getMetadata({
  description: "Packages that managed by SC series.",
  title: "Packages",
})

const Page: FC = () => <Packages />

export default Page
