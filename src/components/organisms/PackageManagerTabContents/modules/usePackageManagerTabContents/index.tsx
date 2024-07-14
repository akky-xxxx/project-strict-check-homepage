import { usePackageManagerStore } from "@shared/storeProviders/packageManager"

import { SyntaxHighlighter } from "../../../../atoms/SyntaxHighlighter"

import type { TabContent } from "../../../../atoms/TabContents/types/TabContent"
import type { PackageManager } from "@shared/types/PackageManager"

type Input = Record<"bun" | "npm" | "pnpm" | "yarn", string>

export const usePackageManagerTabContents = (input: Input) => {
  const { bun, npm, pnpm, yarn } = input
  const { packageManager, setPackageManager } = usePackageManagerStore((store) => store)

  const contents = [
    {
      contentInner: <SyntaxHighlighter code={npm} language="shell" />,
      label: "npm",
    },
    {
      contentInner: <SyntaxHighlighter code={yarn} language="shell" />,
      label: "yarn",
    },
    {
      contentInner: <SyntaxHighlighter code={pnpm} language="shell" />,
      label: "pnpm",
    },
    {
      contentInner: <SyntaxHighlighter code={bun} language="shell" />,
      label: "bun",
    },
  ] as const satisfies Array<TabContent<PackageManager>>

  return {
    contents,
    handleSelectLabel: setPackageManager,
    selectedLabel: packageManager,
  } as const
}
