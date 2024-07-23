import { getMetadata } from "@shared/utils/getMetadata"

import { EslintPluginSCJsRules } from "../../../../components/templates/EslintPluginSCJsRules"

export const runtime = "edge"

export const metadata = getMetadata({
  description: "The rules of eslint-plugin-sc-js.",
  keywords: ["eslint", "eslint-plugin", "javascript"],
  title: "Rules of eslint-plugin-sc-javascript",
})

const Page = () => <EslintPluginSCJsRules />

export default Page
