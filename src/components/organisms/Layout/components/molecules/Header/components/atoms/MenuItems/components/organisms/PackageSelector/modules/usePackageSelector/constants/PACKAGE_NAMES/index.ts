import { DEFAULT_PACKAGE_NAME } from "@shared/constants/DEFAULT_PACKAGE_NAME"

import type { PackageName } from "@shared/types/PackageName"

export const PACKAGE_NAMES = {
  eslint: {
    [DEFAULT_PACKAGE_NAME.category]: [],
    config: [DEFAULT_PACKAGE_NAME.target, "sc-all", "sc-jest", "sc-js", "sc-next", "sc-react", "sc-storybook", "sc-ts"],
    plugin: [DEFAULT_PACKAGE_NAME.target, "sc-js"],
  },
} as const satisfies {
  [L in PackageName["linter"]]: {
    [C in PackageName["category"]]: Array<PackageName["target"]>
  }
}
