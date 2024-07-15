import { PackageItems } from "./components/atoms/PackageItems"
import { Heading1 } from "../../atoms/Heading1"
import { Heading2 } from "../../atoms/Heading2"
import { Heading3 } from "../../atoms/Heading3"
import { Section } from "../../atoms/Section"

import type { FC } from "react"

const ESLINT_CONFIG_ITEMS = [
  {
    title: "eslint config all",

    contents: "contents for eslint config all",
  },
  {
    title: "eslint config js",

    contents: "contents for eslint config js",
  },
  {
    title: "eslint config ts",

    contents: "contents for eslint config ts",
  },
  {
    title: "eslint config jest",

    contents: "contents for eslint config jest",
  },
  {
    title: "eslint config react",

    contents: "contents for eslint config react",
  },
  {
    title: "eslint config next",

    contents: "contents for eslint config next",
  },
  {
    title: "eslint config storybook",

    contents: "contents for eslint config storybook",
  },
]

const ESLINT_PLUGIN_ITEMS = [
  {
    title: "eslint plugin js",

    contents: "contents for eslint plugin js",
  },
]

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
