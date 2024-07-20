/* eslint-disable @typescript-eslint/naming-convention, sort-keys */
const BACKGROUND_COLOR = "var(--colors-syntax-highlight-background-color)"
const COLOR = "var(--colors-syntax-highlight-color)"
const HIGHLIGHT1 = "var(--colors-syntax-highlight-highlight1)"
const HIGHLIGHT2 = "var(--colors-syntax-highlight-highlight2)"
const COMMENT = "var(--colors-syntax-highlight-comment)"
const FONT_WEIGHT_BOLD = "var(--font-weights-font-weight-bold)"

export const HLJS_THEME = {
  "hljs": {
    display: "block",
    overflowX: "auto",
    padding: "0.5em",
    background: BACKGROUND_COLOR,
    color: COLOR,
    width: "calc(100% - 40px)",
  },
  "hljs-keyword": { color: HIGHLIGHT1, fontWeight: FONT_WEIGHT_BOLD },
  "hljs-selector-tag": { color: HIGHLIGHT1, fontWeight: FONT_WEIGHT_BOLD },
  "hljs-literal": { color: HIGHLIGHT1, fontWeight: FONT_WEIGHT_BOLD },
  "hljs-section": { color: HIGHLIGHT1, fontWeight: FONT_WEIGHT_BOLD },
  "hljs-link": { color: HIGHLIGHT1 },
  "hljs-subst": { color: COLOR },
  "hljs-string": { color: HIGHLIGHT2 },
  "hljs-title": { color: HIGHLIGHT2, fontWeight: FONT_WEIGHT_BOLD },
  "hljs-name": { color: HIGHLIGHT2, fontWeight: FONT_WEIGHT_BOLD },
  "hljs-type": { color: HIGHLIGHT2, fontWeight: FONT_WEIGHT_BOLD },
  "hljs-attribute": { color: HIGHLIGHT2 },
  "hljs-symbol": { color: HIGHLIGHT2 },
  "hljs-bullet": { color: HIGHLIGHT2 },
  "hljs-built_in": { color: HIGHLIGHT2 },
  "hljs-addition": { color: HIGHLIGHT2 },
  "hljs-variable": { color: HIGHLIGHT2 },
  "hljs-template-tag": { color: HIGHLIGHT2 },
  "hljs-template-variable": { color: HIGHLIGHT2 },
  "hljs-comment": { color: COMMENT },
  "hljs-quote": { color: COMMENT },
  "hljs-deletion": { color: COMMENT },
  "hljs-meta": { color: COMMENT },
  "hljs-doctag": { fontWeight: FONT_WEIGHT_BOLD },
  "hljs-strong": { fontWeight: FONT_WEIGHT_BOLD },
  "hljs-emphasis": { fontStyle: "italic" },
} as const
