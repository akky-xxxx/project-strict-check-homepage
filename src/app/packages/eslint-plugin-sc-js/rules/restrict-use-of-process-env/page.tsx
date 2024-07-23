import { getMetadata } from "@shared/utils/getMetadata"

import { EslintPluginSCJsRulesRestrictUseOfProcessEnv } from "../../../../../components/templates/EslintPluginSCJsRulesRestrictUseOfProcessEnv"

export const runtime = "edge"

export const metadata = getMetadata({
  description: "For the centralized manage the env.",
  keywords: ["eslint", "eslint-plugin", "javascript"],
  title: "restrict-use-of-process-env of eslint-plugin-sc-javascript",
})

const Page = () => <EslintPluginSCJsRulesRestrictUseOfProcessEnv />

export default Page
