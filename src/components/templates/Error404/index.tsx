import { Fragment } from "react"

import { pagesPath } from "@lib/$path"
import { css } from "@panda/css"

import { ErrorIcon } from "./components/atoms/ErrorIcon"
import { Link } from "../../atoms/Link"
import { Paragraph } from "../../atoms/Paragraph"

import type { FC } from "react"

export const Error404: FC = () => (
  <Fragment>
    <title>404: This page could not be found.</title>
    <div className={root}>
      <div className={errorIconWrapper}>
        <ErrorIcon />
      </div>
      <Paragraph>
        <span className={text}>This page could not be found.</span>
      </Paragraph>
      <Paragraph>
        <Link href={pagesPath.$url().path}>
          <span className={link}>Back to Home</span>
        </Link>
      </Paragraph>
    </div>
  </Fragment>
)

const root = css({
  display: "grid",
  paddingBlock: "10dvh",
  placeContent: "center",
  textAlign: "center",
})

const errorIconWrapper = css({
  height: {
    base: 100,
    md: 200,
  },
  marginInline: "auto",
  width: {
    base: 100,
    md: 200,
  },
})

const text = css({
  fontSize: "x-large",
  fontWeight: "fontWeight.bold",
})

const link = css({
  fontSize: "large",
})
