import { css, cx } from "@panda/css"

import { usePackageSelector } from "./modules/usePackageSelector"

import type { FC } from "react"

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

const overTb = css({
  alignItems: "center",
  columnGap: 8,
  display: {
    base: "none",
    md: "flex",
  },
  height: 30,
})

const onlySp = css({
  alignItems: "center",
  columnGap: 4,
  display: {
    base: "flex",
    md: "none",
  },
  height: 48,
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

const packageNameStyle = css({
  width: 220,
})
