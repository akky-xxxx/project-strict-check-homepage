import { ITEMS } from "./constants/ITEMS"
import { Paragraph } from "../Paragraph"
import { PluginRulesTable } from "../PluginRulesTable"

import type { FC } from "react"

export const EslintPluginJsRules: FC = () => (
  <div>
    <Paragraph>
      ✅: Set in the recommended configuration.
    </Paragraph>
    <PluginRulesTable items={ITEMS} />
  </div>
)
