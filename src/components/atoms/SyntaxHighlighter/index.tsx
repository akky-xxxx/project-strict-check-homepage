import SyntaxHighlighterOrigin from "react-syntax-highlighter"

import { HLJS_THEME } from "./constants/HLJS_THEME"

import type { FC } from "react"

type Props = {
  code: string
  language: "javascript" | "shell"
}

export const SyntaxHighlighter: FC<Props> = (props) => {
  const { code, language } = props

  return (
    <SyntaxHighlighterOrigin showLineNumbers language={language} style={HLJS_THEME}>
      {code}
    </SyntaxHighlighterOrigin>
  )
}
