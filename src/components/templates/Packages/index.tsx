import { PackageItems } from "./components/atoms/PackageItems"
import { ESLINT_CONFIG_ITEMS } from "./constants/ESLINT_CONFIG_ITEMS"
import { ESLINT_PLUGIN_ITEMS } from "./constants/ESLINT_PLUGIN_ITEMS"
import { Heading1 } from "../../atoms/Heading1"
import { Heading2 } from "../../atoms/Heading2"
import { Heading3 } from "../../atoms/Heading3"
import { Section } from "../../atoms/Section"

import type { FC } from "react"

export const Packages: FC = () => (
  <div>
    <Heading1>Packages</Heading1>
    <Section>
      <Heading2>eslint</Heading2>
      <Section>
        <Heading3>eslint config</Heading3>
        <PackageItems items={ESLINT_CONFIG_ITEMS} />
      </Section>

      <Section>
        <Heading3>eslint plugin</Heading3>
        <PackageItems items={ESLINT_PLUGIN_ITEMS} />
      </Section>
    </Section>
  </div>
)
