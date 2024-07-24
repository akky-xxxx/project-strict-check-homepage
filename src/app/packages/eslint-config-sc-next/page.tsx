import { getMetadata } from "@shared/utils/getMetadata"

import { EslintConfigSCNext } from "../../../components/templates/EslintConfigSCNext"

export const runtime = "edge"

export const metadata = getMetadata({
  description: "This package sets some rules based on the shared config a few packages.",
  keywords: ["eslint", "eslint-config", "react.js", "next.js"],
  title: "eslint-config-sc-next",
})

const Page = () => <EslintConfigSCNext />

export default Page
