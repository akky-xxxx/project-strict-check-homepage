import { css } from "@panda/css"

import { Introduction } from "./components/atoms/Introduction"
import { Packages } from "./components/atoms/Packages"
import { Card } from "../../atoms/Card"
import { Heading2 } from "../../atoms/Heading2"
import { Section } from "../../atoms/Section"

import type { FC } from "react"

export const Home: FC = () => (
  <div>
    <Introduction />

    <Section hasBorder>
      <Heading2>Next page</Heading2>
      <nav className={cardWrapper}>
        <Card
          description="SC series package list and each outline descriptions."
          href="/packages"
          title="Packages"
        />
      </nav>
    </Section>

    <Packages />
  </div>
)

const cardWrapper = css({
  marginTop: 16,
})
