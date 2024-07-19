import { css } from "@panda/css"
import { accent } from "@shared/styles/accent"
import { bold } from "@shared/styles/bold"

import { Heading1 } from "../../../../../atoms/Heading1"
import { Link } from "../../../../../atoms/Link"
import { Paragraph } from "../../../../../atoms/Paragraph"

import type { FC } from "react"

// eslint-disable-next-line max-lines-per-function
export const Introduction: FC = () => (
  <div className={root}>
    <Heading1>Strict Check</Heading1>
    <Paragraph>
      <span className={accent}>
        SC (
        {" "}
        <span className={bold}>S</span>
        {/* cspell:disable-next-line */}
        trict
        {" "}
        <span className={bold}>C</span>
        heck ) Series
      </span>
      {" "}
      is the packages for static analysis
      that keep maintainability on operation and development for the frontend developer.
    </Paragraph>

    <Paragraph>
      These packages maybe able to
      {" "}
      <strong className={accent}>reduce</strong>
      {" "}
      the
      {" "}
      <strong className={bold}>difference notation</strong>
      {" "}
      and
      {" "}
      <strong className={bold}>Confusing implementation</strong>
      {" "}
      from multiple developers.
    </Paragraph>

    <Paragraph>
      These packages recommended to the products that need to be robust,
      {" "}
      but not recommended the teams that includes beginner,
      {" "}
      because these includes so strict and niche rule.
      {" "}
      Recommended adjust rule,
      {" "}
      when if introduce these package into the teams that includes beginner.
    </Paragraph>

    <Paragraph>
      About packages, please refer the
      {" "}
      <Link href="/packages">this</Link>
      .
    </Paragraph>
  </div>
)

const root = css({
  paddingInline: {
    base: 12,
    lg: 0,
  },
})
