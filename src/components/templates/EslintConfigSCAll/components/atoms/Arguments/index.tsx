import { Fragment } from "react"

import { HEADINGS_INFO } from "@shared/constants/HEADINGS_INFO"
import { unOrderListStyles } from "@shared/styles/unOrderListStyles"

import { Code } from "../../../../../atoms/Code"
import { Heading4 } from "../../../../../atoms/Heading4"
import { Note } from "../../../../../atoms/Note"

import type { FC } from "react"

const {
  ESLINT_CONFIG_ALL: {
    HOME: {
      ARGUMENTS,
    },
  },
} = HEADINGS_INFO
const SECOND_ARGUMENT = ["jest", "react", "next", "storybook"] as const

export const Arguments: FC = () => (
  <Fragment>
    <Heading4 id={ARGUMENTS.hash}>{ARGUMENTS.name}</Heading4>
    <ul className={unOrderListStyles.ul}>
      <li className={unOrderListStyles.li}>
        <span>First ( required ) - string</span>
        <ul className={unOrderListStyles.ul}>
          <li className={unOrderListStyles.li}>
            <Code>javascript</Code>
            {" "}
            |
            {" "}
            <Code>typescript</Code>
          </li>
        </ul>
      </li>

      <li className={unOrderListStyles.li}>
        <span>Second ( optional ) - string array</span>
        <ul className={unOrderListStyles.ul}>
          {SECOND_ARGUMENT.map((label) => (
            <li key={label} className={unOrderListStyles.li}>
              <Code>{label}</Code>
            </li>
          ))}
        </ul>
      </li>
    </ul>

    <Note>
      It varies the dependencies by arguments.
    </Note>
  </Fragment>
)
