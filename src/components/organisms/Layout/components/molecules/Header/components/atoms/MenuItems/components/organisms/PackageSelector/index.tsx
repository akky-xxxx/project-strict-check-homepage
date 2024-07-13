import { css, cx } from "@panda/css"

import { usePackageSelector } from "./modules/usePackageSelector"

import type { FC } from "react"

export const PackageSelector: FC = () => {
  const {
    categoryItems,
    handleChangeCategoryName,
    handleChangeTargetName,
    packageName,
    targetItems,
  } = usePackageSelector()
  return (
    <div className={cx(root, "PackageSelector")}>
      <select disabled className={cx(select, linter)} value="eslint">
        <option>eslint</option>
      </select>

      <span>-</span>

      <select
        className={cx(select, category)}
        value={packageName.category}
        onChange={handleChangeCategoryName}
      >
        {categoryItems.map((categoryItem) => (
          <option key={categoryItem} value={categoryItem}>
            {categoryItem}
          </option>
        ))}
      </select>

      <span>-</span>

      <select
        className={cx(select, target)}
        value={packageName.target}
        onChange={handleChangeTargetName}
      >
        {targetItems.map((targetItem) => (
          <option key={targetItem} value={targetItem}>
            {targetItem}
          </option>
        ))}
      </select>
    </div>
  )
}

const root = css({
  alignItems: "center",
  columnGap: {
    base: 4,
    lg: 8,
  },
  display: "flex",
  height: {
    base: 48,
    md: 30,
  },
})

const select = css({
  backgroundColor: "backgroundColor.case2",
  color: "color",
  cursor: "pointer",
  height: {
    base: 48,
    md: 30,
  },
  paddingInline: {
    md: 8,
  },
})

const linter = css({
  width: 95,
})

const category = css({
  width: 90,
})

const target = css({
  width: 112,
})
