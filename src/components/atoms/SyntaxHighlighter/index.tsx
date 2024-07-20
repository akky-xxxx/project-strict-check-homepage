"use client"

import toast from "react-hot-toast"
// eslint-disable-next-line no-restricted-imports
import SyntaxHighlighterOrigin from "react-syntax-highlighter"

import { css } from "@panda/css"

import { CopyIcon } from "./components/atoms/CopyIcon"
import { HLJS_THEME } from "./constants/HLJS_THEME"

import type { FC } from "react"

type Props = {
  code: string
  language: "javascript" | "shell"
}

export const SyntaxHighlighter: FC<Props> = (props) => {
  const { code, language } = props
  const onClickIcon = async () => {
    await navigator.clipboard.writeText(code)
    toast.success("Copied the code.", {
      style: {
        backgroundColor: "var(--colors-background-color-case2)",
        border: "var(--colors-color-accent) 1px solid",
        color: "var(--colors-color)",
      },
    })
  }

  return (
    <div className={root}>
      <button aria-label="Copy the code" className={iconWrapper} type="button" onClick={onClickIcon}>
        <CopyIcon />
      </button>
      <SyntaxHighlighterOrigin showLineNumbers language={language} style={HLJS_THEME}>
        {code}
      </SyntaxHighlighterOrigin>
    </div>
  )
}

const root = css({
  backgroundColor: "backgroundColor.case2",
  position: "relative",
})

const iconWrapper = css({
  color: "color",
  cursor: "pointer",
  height: 20,
  position: "absolute",
  right: 10,
  top: 10,
  width: 20,
})
