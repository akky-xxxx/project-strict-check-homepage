import { cx } from "@panda/css"

import { usePackageSelector } from "./modules/usePackageSelector"
import { styles } from "./styles"

import type { FC } from "react"

const {
  category,
  linter,
  onlySp,
  overTb,
  packageNameStyle,
  select,
  target,
} = styles

export const PackageSelector: FC = () => {
  const {
    categoryItems,
    handleChangeCategoryName,
    handleChangePackageName,
    handleChangeTargetName,
    packageName,
    packageNameItems,
    targetItems,
  } = usePackageSelector()
  return (
    <div className="PackageSelector">
      <div className={overTb}>
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

      <div className={onlySp}>
        <select
          className={cx(select, packageNameStyle)}
          value={`${packageName.linter}-${packageName.category}-${packageName.target}`}
          onChange={handleChangePackageName}
        >
          {packageNameItems.map((record) => (
            <option key={record} value={record}>
              {record}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
