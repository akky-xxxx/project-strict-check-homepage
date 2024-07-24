import { getMetadata } from "@shared/utils/getMetadata"

import { EslintConfigSCAll } from "../../../components/templates/EslintConfigSCAll"

export const runtime = "edge"

export const metadata = getMetadata({
  description: "This package uses the following packages depending on the configuration.",
  keywords: ["eslint", "eslint-config"],
  title: "eslint-config-sc-all",
})

const Page = () => <EslintConfigSCAll />

export default Page
