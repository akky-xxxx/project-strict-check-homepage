import { Fragment } from "react"

import { HEADINGS_INFO } from "@shared/constants/HEADINGS_INFO"

import { Heading3 } from "../../../../../atoms/Heading3"
import { Note } from "../../../../../atoms/Note"
import { PackageManagerTabContents } from "../../../../../organisms/PackageManagerTabContents"

import type { FC } from "react"

const {
  ESLINT_CONFIG_ALL: {
    HOME: {
      INSTALLATION,
    },
  },
} = HEADINGS_INFO
const PACKAGE_NAME = "eslint-config-sc-all"

export const Installation: FC = () => (
  <Fragment>
    <Heading3 id={INSTALLATION.hash}>{INSTALLATION.name}</Heading3>

    <PackageManagerTabContents
      bun={`$ bun add -D ${PACKAGE_NAME}`}
      npm={`$ npm i -D ${PACKAGE_NAME}`}
      pnpm={`$ pnpm add -D ${PACKAGE_NAME}`}
      yarn={`$ yarn add -D ${PACKAGE_NAME}`}
    />

    <Note>
      Also install eslint-config-sc-js or eslint-config-sc-ts depending on the first
      (javascript / typescript) argument of getConfigs(), and eslint-config-sc-jest /
      eslint-config-sc-next / eslint-config-sc-react / eslint-config-sc-storybook depending
      on which library names you pass as the second argument.
    </Note>
  </Fragment>
)
