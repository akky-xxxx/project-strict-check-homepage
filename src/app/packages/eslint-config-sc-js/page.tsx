import { getMetadata } from "@shared/utils/getMetadata"

import { EslintConfigSCJs } from "../../../components/templates/EslintConfigSCJs"

export const runtime = "edge"

export const metadata = getMetadata({
  description: "This package sets some rules based on the shared config a few packages.",
  keywords: ["eslint", "eslint-config", "js"],
  title: "eslint-config-sc-js",
})

const Page = () => <EslintConfigSCJs />

export default Page
