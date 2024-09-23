import { PACKAGE_NAMES } from "../../constants/PACKAGE_NAMES"

import type { PackageName } from "@shared/types/PackageName"

export const getCategoryItems = () => Object.keys(PACKAGE_NAMES.eslint)
  .sort((a, b) => a.localeCompare(b))
  // @ts-expect-error PACKAGE_NAMES を schema で縛ってるため type guard しないで握りつぶす
  .map<PackageName["category"]>((categoryName) => (categoryName))
