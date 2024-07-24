import { getMetadata } from "@shared/utils/getMetadata"

import { EslintPluginSCJs } from "../../../components/templates/EslintPluginSCJs"

export const runtime = "edge"

export const metadata = getMetadata({
  description: "This is a package that requires individual rule settings for javascript.",
  keywords: ["eslint", "eslint-plugin", "javascript"],
  title: "eslint-plugin-sc-javascript",
})

const Page = () => <EslintPluginSCJs />

export default Page
