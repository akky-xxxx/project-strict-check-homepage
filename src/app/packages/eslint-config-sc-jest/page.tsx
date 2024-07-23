import { getMetadata } from "@shared/utils/getMetadata"

import { EslintConfigSCJest } from "../../../components/templates/EslintConfigSCJest"

export const runtime = "edge"

export const metadata = getMetadata({
  description: "This package sets some rules based on the shared config of eslint-plugin-jest.",
  keywords: ["eslint", "eslint-config", "jest"],
  title: "eslint-config-sc-jest",
})

const Page = () => <EslintConfigSCJest />

export default Page
