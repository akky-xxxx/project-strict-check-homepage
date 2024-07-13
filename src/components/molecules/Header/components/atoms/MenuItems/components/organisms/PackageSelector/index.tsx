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
      <select disabled className={select} value="eslint">
        <option>eslint</option>
      </select>

      <span>-</span>

      <select className={select} value={packageName.category} onChange={handleChangeCategoryName}>
        {categoryItems.map((categoryItem) => (
          <option key={categoryItem} value={categoryItem}>
            {categoryItem}
          </option>
        ))}
      </select>

      <span>-</span>

      <select className={select} value={packageName.target} onChange={handleChangeTargetName}>
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
  columnGap: 8,
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
  width: 100,
})
