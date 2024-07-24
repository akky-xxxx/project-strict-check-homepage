import { getMetadata } from "@shared/utils/getMetadata"

import { EslintPluginSCJsRulesForbiddenMultipleNamedExports } from "../../../../../components/templates/EslintPluginSCJsRulesForbiddenMultipleNamedExports"

export const runtime = "edge"

export const metadata = getMetadata({
  description: "Forbidden the multiple named exports at one file.",
  keywords: ["eslint", "eslint-plugin", "javascript"],
  title: "forbidden-multiple-named-exports of eslint-plugin-sc-javascript",
})

const Page = () => <EslintPluginSCJsRulesForbiddenMultipleNamedExports />

export default Page
