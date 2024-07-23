import { pagesPath } from "@lib/$path"

import { Link } from "../../../Link"

import type { PluginRulesTableProps } from "../../../PluginRulesTable/types/PluginRulesTableProps"

export const ITEMS = [
  [
    {
      content: (
        <Link href={pagesPath.packages.eslint_plugin_sc_js.rules.file_path_patterns.$url().path}>
          file-path-patterns
        </Link>
      ),
      key: "file-path-patterns",
    },
    "Check if file path follows regular expression",
    false,
  ],
  [
    {
      content: (
        <Link
          // eslint-disable-next-line @stylistic/max-len
          href={pagesPath.packages.eslint_plugin_sc_js.rules.forbidden_multiple_named_exports.$url().path}
        >
          forbidden-multiple-named-exports
        </Link>
      ),
      key: "forbidden-multiple-named-exports",
    },
    "Forbidden the multiple named exports at one file",
    false,
  ],
  [
    {
      content: (
        <Link href={pagesPath.packages.eslint_plugin_sc_js.rules.individual_import.$url().path}>
          individual-import
        </Link>
      ),
      key: "individual-import",
    },
    "Import them individual",
    false,
  ],
  [
    {
      content: (
        <Link
          // eslint-disable-next-line @stylistic/max-len
          href={pagesPath.packages.eslint_plugin_sc_js.rules.match_names_of_file_and_export.$url().path}
        >
          match-names-of-file-and-export
        </Link>
      ),
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
