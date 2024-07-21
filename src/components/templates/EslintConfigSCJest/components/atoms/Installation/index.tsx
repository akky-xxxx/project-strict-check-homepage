import { Fragment } from "react"

import { Heading3 } from "../../../../../atoms/Heading3"
import { PackageManagerTabContents } from "../../../../../organisms/PackageManagerTabContents"

import type { FC } from "react"

const PACKAGE_NAME = "eslint-config-sc-jest"

export const Installation: FC = () => (
  <Fragment>
    <Heading3 id="installation">Installation</Heading3>

    <PackageManagerTabContents
      bun={`$ bun add -D ${PACKAGE_NAME}`}
      npm={`$ npm i -D ${PACKAGE_NAME}`}
      pnpm={`$ pnpm add -D ${PACKAGE_NAME}`}
      yarn={`$ yarn add -D ${PACKAGE_NAME}`}
    />
  </Fragment>
)
