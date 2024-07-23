import { getMetadata } from "@shared/utils/getMetadata"

import { EslintConfigSCStorybook } from "../../../components/templates/EslintConfigSCStorybook"

export const runtime = "edge"

export const metadata = getMetadata({
  description: "This package sets some rules based on the shared config of eslint-plugin-storybook.",
  keywords: ["eslint", "eslint-config", "storybook"],
  title: "eslint-config-sc-storybook",
})

const Page = () => <EslintConfigSCStorybook />

export default Page
