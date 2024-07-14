import { css } from "@panda/css"

import { Card } from "../../../../../atoms/Card"
import { Heading2 } from "../../../../../atoms/Heading2"
import { Section } from "../../../../../atoms/Section"

import type { FC } from "react"

export const Packages: FC = () => (
  <Section>
    <Heading2>Packages</Heading2>
    <div className={packagesCardWrapper}>
      <Card
        description="All in one the eslint config sc series."
        href="/eslint-config-all"
        title="eslint-config-all"
      />
      <Card
        description="eslint config for javascript."
        href="/eslint-config-js"
        title="eslint-config-js"
      />
      <Card
        description="eslint config for typescript."
        href="/eslint-config-ts"
        title="eslint-config-ts"
      />
      <Card
        description="eslint config for Jest"
        href="/eslint-config-jest"
        title="eslint-config-jest"
      />
      <Card
        description="eslint config for Storybook"
        href="/eslint-config-storybook"
        title="eslint-config-storybook"
      />
      <Card
        description="eslint config for Next.js."
        href="/eslint-config-next"
        title="eslint-config-next"
      />
      <Card
        description="eslint config for React.js."
        href="/eslint-config-react"
        title="eslint-config-react"
      />
      <Card
        description="eslint plugin for javascript."
        href="/eslint-plugin-js"
        title="eslint-plugin-js"
      />
    </div>
  </Section>
)

const packagesCardWrapper = css({
  display: "grid",
  gap: 12,
  gridTemplateColumns: {
    md: "repeat(2, calc(50% - 6px))",
  },
  marginTop: 16,
})
