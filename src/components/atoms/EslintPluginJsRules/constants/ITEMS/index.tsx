import type { PluginRulesTableProps } from "../../../PluginRulesTable/types/PluginRulesTableProps"

export const ITEMS = [
  [
    {
      content: "file-path-patterns",
      key: "file-path-patterns",
    },
    "Check if file path follows regular expression",
    false,
  ],
  [
    {
      content: "forbidden-multiple-named-exports",
      key: "forbidden-multiple-named-exports",
    },
    "Forbidden the multiple named exports at one file",
    false,
  ],
  [
    {
      content: "individual-import",
      key: "individual-import",
    },
    "Import them individual",
    false,
  ],
  [
    {
      content: "match-names-of-file-and-export",
      key: "match-names-of-file-and-export",
    },
    "Match name of filename and export target",
    false,
  ],
  [
    {
      content: "restrict-use-of-process-env",
      key: "restrict-use-of-process-env",
    },
    "Restrict environment usage",
    true,
  ],
] satisfies PluginRulesTableProps["items"]