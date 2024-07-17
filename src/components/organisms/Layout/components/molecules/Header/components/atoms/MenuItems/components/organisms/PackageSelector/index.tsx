import { cx } from "@panda/css"

import { Select } from "./components/atoms/Select"
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

        <Select
          className={cx(select, category)}
          handleChange={handleChangeCategoryName}
          items={categoryItems}
          value={packageName.category}
        />

        <span>-</span>

        <Select
          className={cx(select, target)}
          handleChange={handleChangeTargetName}
          items={targetItems}
          value={packageName.target}
        />
      </div>

      <div className={onlySp}>
        <Select
          className={cx(select, packageNameStyle)}
          handleChange={handleChangePackageName}
          items={packageNameItems}
          value={`${packageName.linter}-${packageName.category}-${packageName.target}`}
        />
      </div>
    </div>
  )
}
