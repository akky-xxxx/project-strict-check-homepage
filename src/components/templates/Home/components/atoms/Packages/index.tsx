import { pagesPath } from "@lib/$path"
import { css } from "@panda/css"

import { Card } from "../../../../../atoms/Card"
import { Heading2 } from "../../../../../atoms/Heading2"
import { Section } from "../../../../../atoms/Section"

import type { ComponentProps, FC } from "react"

const CARD_DATA = [
  {
    description: "All in one package that eslint config sc series.",
    href: pagesPath.packages.eslint_config_sc_all.$url().path,
    title: "eslint-config-sc-all",
  },
  {
    description: "eslint config for javascript.",
    href: pagesPath.packages.eslint_config_sc_js.$url().path,
    title: "eslint-config-sc-js",
  },
  {
    description: "eslint config for typescript.",
    href: pagesPath.packages.eslint_config_sc_ts.$url().path,
    title: "eslint-config-sc-ts",
  },
  {
    description: "eslint config for Jest.",
    href: pagesPath.packages.eslint_config_sc_jest.$url().path,
    title: "eslint-config-sc-jest",
  },
  {
    description: "eslint config for React.js.",
    href: pagesPath.packages.eslint_config_sc_react.$url().path,
    title: "eslint-config-sc-react",
  },
  {
    description: "eslint config for Next.js.",
    href: pagesPath.packages.eslint_config_sc_next.$url().path,
    title: "eslint-config-sc-next",
  },
  {
    description: "eslint config for Storybook.",
    href: pagesPath.packages.eslint_config_sc_storybook.$url().path,
    title: "eslint-config-sc-storybook",
  },
  {
    description: "eslint plugin for javascript.",
    href: pagesPath.packages.eslint_plugin_sc_js.$url().path,
    title: "eslint-plugin-sc-js",
  },
] as const satisfies Array<ComponentProps<typeof Card>>

export const Packages: FC = () => (
  <Section>
    <Heading2>Packages</Heading2>
    <nav>
      <ul className={packagesCardWrapper}>
        {CARD_DATA.map((card) => (
          <li key={card.title}>
            <Card {...card} />
          </li>
        ))}
      </ul>
    </nav>
  </Section>
)

const packagesCardWrapper = css({
  display: "grid",
  gap: 16,
  gridTemplateColumns: {
    lg: "repeat(3, minmax(0, 1fr))",
    md: "repeat(2, minmax(0, 1fr))",
  },
  marginTop: 16,
})
