import { getMetadata } from "@shared/utils/getMetadata"

import { EslintPluginSCJsRulesFilePathPatterns } from "../../../../../components/templates/EslintPluginSCJsRulesFilePathPatterns"

export const runtime = "edge"

export const metadata = getMetadata({
  description: "Check if file path follows regular expression.",
  keywords: ["eslint", "eslint-plugin", "javascript"],
  title: "file-path-patterns of eslint-plugin-sc-javascript",
})

const Page = () => <EslintPluginSCJsRulesFilePathPatterns />

export default Page
