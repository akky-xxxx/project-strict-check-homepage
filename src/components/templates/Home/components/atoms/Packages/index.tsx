import { css } from "@panda/css"

import { Card } from "../../../../../atoms/Card"
import { Heading2 } from "../../../../../atoms/Heading2"
import { Section } from "../../../../../atoms/Section"

import type { ComponentProps, FC } from "react"

const CARD_DATA = [
  {
    description: "All in one package that eslint config sc series.",
    href: "/packages/eslint-config-sc-all",
    title: "eslint-config-sc-all",
  },
  {
    description: "eslint config for javascript.",
    href: "/packages/eslint-config-sc-js",
    title: "eslint-config-sc-js",
  },
  {
    description: "eslint config for typescript.",
    href: "/packages/eslint-config-sc-ts",
    title: "eslint-config-sc-ts",
  },
  {
    description: "eslint config for Jest.",
    href: "/packages/eslint-config-sc-jest",
    title: "eslint-config-sc-jest",
  },
  {
    description: "eslint config for React.js.",
    href: "/packages/eslint-config-sc-react",
    title: "eslint-config-sc-react",
  },
  {
    description: "eslint config for Next.js.",
    href: "/packages/eslint-config-sc-next",
    title: "eslint-config-sc-next",
  },
  {
    description: "eslint config for Storybook.",
    href: "/packages/eslint-config-sc-storybook",
    title: "eslint-config-sc-storybook",
  },
  {
    description: "eslint plugin for javascript.",
    href: "/packages/eslint-plugin-sc-js",
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
