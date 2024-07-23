import { getMetadata } from "@shared/utils/getMetadata"

import { EslintConfigSCReact } from "../../../components/templates/EslintConfigSCReact"

export const runtime = "edge"

export const metadata = getMetadata({
  description: "This package sets some rules based on the shared config a few packages.",
  keywords: ["eslint", "eslint-config", "react.js"],
  title: "eslint-config-sc-react",
})

const Page = () => <EslintConfigSCReact />

export default Page
