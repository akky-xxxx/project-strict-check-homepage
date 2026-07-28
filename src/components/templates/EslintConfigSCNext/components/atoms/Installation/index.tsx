import { Fragment } from "react"

import { HEADINGS_INFO } from "@shared/constants/HEADINGS_INFO"

import { Heading3 } from "../../../../../atoms/Heading3"
import { PackageManagerTabContents } from "../../../../../organisms/PackageManagerTabContents"

import type { FC } from "react"

const {
  ESLINT_CONFIG_NEXT: {
    HOME: {
      INSTALLATION,
    },
  },
} = HEADINGS_INFO
const PACKAGE_NAME = "eslint-config-sc-next"
const PEER_DEPENDENCIES = "@next/eslint-plugin-next eslint-config-sc-react"

export const Installation: FC = () => (
  <Fragment>
    <Heading3 id={INSTALLATION.hash}>{INSTALLATION.name}</Heading3>

    <PackageManagerTabContents
      bun={`$ bun add -D ${PACKAGE_NAME} ${PEER_DEPENDENCIES}`}
      npm={`$ npm i -D ${PACKAGE_NAME} ${PEER_DEPENDENCIES}`}
      pnpm={`$ pnpm add -D ${PACKAGE_NAME} ${PEER_DEPENDENCIES}`}
      yarn={`$ yarn add -D ${PACKAGE_NAME} ${PEER_DEPENDENCIES}`}
    />
  </Fragment>
)
