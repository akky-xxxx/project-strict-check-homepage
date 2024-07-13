import { DEFAULT_PACKAGE_NAME } from "@shared/constants/DEFAULT_PACKAGE_NAME"

import type { PackageName } from "@shared/types/PackageName"

export const PACKAGE_NAMES = {
  eslint: {
    [DEFAULT_PACKAGE_NAME.category]: [],
    config: [DEFAULT_PACKAGE_NAME.target, "all", "jest", "js", "next", "react", "storybook", "ts"],
    plugin: [DEFAULT_PACKAGE_NAME.target, "js"],
  },
} as const satisfies {
  [L in PackageName["linter"]]: {
    [C in PackageName["category"]]: Array<PackageName["target"]>
  }
}
