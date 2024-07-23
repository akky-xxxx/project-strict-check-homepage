import { getMetadata } from "@shared/utils/getMetadata"

import { EslintPluginSCJsRulesMatchNamesOfFileAndExport } from "../../../../../components/templates/EslintPluginSCJsRulesMatchNamesOfFileAndExport"

export const runtime = "edge"

export const metadata = getMetadata({
  description: "Match name of filename and export target.",
  keywords: ["eslint", "eslint-plugin", "javascript"],
  title: "match-names-of-file-and-export of eslint-plugin-sc-javascript",
})

const Page = () => <EslintPluginSCJsRulesMatchNamesOfFileAndExport />

export default Page
