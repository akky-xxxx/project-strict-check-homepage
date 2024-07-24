import { getMetadata } from "@shared/utils/getMetadata"

import { EslintPluginSCJsRulesIndividualImport } from "../../../../../components/templates/EslintPluginSCJsRulesIndividualImport"

export const runtime = "edge"

export const metadata = getMetadata({
  description: "Import them individual.",
  keywords: ["eslint", "eslint-plugin", "javascript"],
  title: "individual-import of eslint-plugin-sc-javascript",
})

const Page = () => <EslintPluginSCJsRulesIndividualImport />

export default Page
