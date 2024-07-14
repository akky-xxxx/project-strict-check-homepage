import { useEslintConfigStore } from "@shared/storeProviders/eslintConfig"

import { SyntaxHighlighter } from "../../../../atoms/SyntaxHighlighter"

import type { TabContent } from "../../../../atoms/TabContents/types/TabContent"
import type { EslintConfig } from "@shared/types/EslintConfig"

type Input = Record<"flatCode" | "legacyCode", string>

export const useEslintConfigTabContents = (input: Input) => {
  const { flatCode, legacyCode } = input
  const { eslintConfig, setEslintConfig } = useEslintConfigStore((store) => store)

  const contents = [
    {
      contentInner: <SyntaxHighlighter code={flatCode} language="javascript" />,
      label: "flat",
    },
    {
      contentInner: <SyntaxHighlighter code={legacyCode} language="javascript" />,
      label: "legacy",
    },
  ] as const satisfies Array<TabContent<EslintConfig>>

  return {
    contents,
    handleSelectLabel: setEslintConfig,
    selectedLabel: eslintConfig,
  } as const
}
