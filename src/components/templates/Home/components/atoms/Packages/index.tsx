import { css } from "@panda/css"

import { Card } from "../../../../../atoms/Card"
import { Heading2 } from "../../../../../atoms/Heading2"
import { Section } from "../../../../../atoms/Section"

import type { ComponentProps, FC } from "react"

const CARD_DATA = [
  {
    description: "All in one package that eslint config sc series.",
    href: "/eslint-config-all",
    title: "eslint-config-all",
  },
  {
    description: "eslint config for javascript.",
    href: "/eslint-config-js",
    title: "eslint-config-js",
  },
  {
    description: "eslint config for typescript.",
    href: "/eslint-config-ts",
    title: "eslint-config-ts",
  },
  {
    description: "eslint config for Jest.",
    href: "/eslint-config-jest",
    title: "eslint-config-jest",
  },
  {
    description: "eslint config for Storybook.",
    href: "/eslint-config-storybook",
    title: "eslint-config-storybook",
  },
  {
    description: "eslint config for Next.js.",
    href: "/eslint-config-next",
    title: "eslint-config-next",
  },
  {
    description: "eslint config for React.js.",
    href: "/eslint-config-react",
    title: "eslint-config-react",
  },
  {
    description: "eslint plugin for javascript.",
    href: "/eslint-plugin-js",
    title: "eslint-plugin-js",
  },
] as const satisfies Array<ComponentProps<typeof Card>>

export const Packages: FC = () => (
  <Section>
    <Heading2>Packages</Heading2>
    <div className={packagesCardWrapper}>
      {CARD_DATA.map((card) => <Card key={card.title} {...card} />)}
    </div>
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
