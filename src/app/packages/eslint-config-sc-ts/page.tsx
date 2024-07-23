import { getMetadata } from "@shared/utils/getMetadata"

import { EslintConfigSCTs } from "../../../components/templates/EslintConfigSCTs"

export const runtime = "edge"

export const metadata = getMetadata({
  description: "This package sets some rules based on the shared config a few packages.",
  keywords: ["eslint", "eslint-config", "typescript"],
  title: "eslint-config-sc-typescript",
})

const Page = () => <EslintConfigSCTs />

export default Page
