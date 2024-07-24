import { useState, useEffect } from "react"

import { usePackageNameStore } from "@shared/storeProviders/packageName"

import { getCategoryItems } from "./modules/getCategoryItems"
import { getPackageNameItems } from "./modules/getPackageNameItems"
import { getTargetItems } from "./modules/getTargetItems"
import { useGetHandlers } from "./modules/useGetHandlers"

import type { PackageName } from "@shared/types/PackageName"

const categoryItems = getCategoryItems()
const packageNameItems = getPackageNameItems()

export const usePackageSelector = () => {
  const { packageName } = usePackageNameStore((store) => store)
  const [targetItems, setTargetItems] = useState<Array<PackageName["target"]>>(getTargetItems(packageName.category))
  const {
    handleChangeCategoryName,
    handleChangePackageName,
    handleChangeTargetName,
  } = useGetHandlers({ setTargetItems })

  useEffect(() => {
    setTargetItems(getTargetItems(packageName.category))
  }, [packageName.category])

  return {
    categoryItems,
    handleChangeCategoryName,
    handleChangePackageName,
    handleChangeTargetName,
    packageName,
    packageNameItems,
    targetItems,
  }
}
