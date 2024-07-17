import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { safeParse } from "valibot"

import { DEFAULT_PACKAGE_NAME } from "@shared/constants/DEFAULT_PACKAGE_NAME"
import { packageNameSchema } from "@shared/schemas/packageNameSchema"
import { usePackageNameStore } from "@shared/storeProviders/packageName"

import { getCategoryItems } from "./modules/getCategoryItems"
import { getPackageNameItems } from "./modules/getPackageNameItems"
import { getTargetItems } from "./modules/getTargetItems"

import type { PackageName } from "@shared/types/PackageName"
import type { ChangeEventHandler } from "react"

const categoryItems = getCategoryItems()
const packageNameItems = getPackageNameItems()

export const usePackageSelector = () => {
  const {
    packageName,
    setPackageCategoryName,
    setPackageName,
    setPackageTargetName,
  } = usePackageNameStore((store) => store)
  const [targetItems, setTargetItems] = useState<Array<PackageName["target"]>>(getTargetItems(packageName.category))
  const router = useRouter()
  useEffect(() => {
    setTargetItems(getTargetItems(packageName.category))
  }, [packageName.category])

  const handleChangeCategoryName: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const {
      currentTarget: { value },
    } = event
    const parseTarget = {
      ...packageName,
      category: value,
      target: DEFAULT_PACKAGE_NAME.target,
    }
    const result = safeParse(packageNameSchema, parseTarget)
    const nextCategoryName = result.success ? result.output.category : DEFAULT_PACKAGE_NAME.category
    setPackageCategoryName(nextCategoryName)
    setTargetItems(getTargetItems(nextCategoryName))
  }

  const handleChangeTargetName: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const {
      currentTarget: { value },
    } = event
    const parseTarget = {
      ...packageName,
      target: value,
    }
    const result = safeParse(packageNameSchema, parseTarget)
    const newData = result.success
      ? result.output
      : DEFAULT_PACKAGE_NAME
    setPackageTargetName(newData.target)
    if (newData.target === DEFAULT_PACKAGE_NAME.target) return
    router.push(`/eslint-${newData.category}-${newData.target}`)
  }

  const handleChangePackageName: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const {
      currentTarget: { value },
    } = event
    const [maybeLinterName, maybeCategoryName, maybeTargetName] = value.split("-")
    const parseTarget = {
      category: maybeCategoryName,
      linter: maybeLinterName,
      target: maybeTargetName,
    }
    const result = safeParse(packageNameSchema, parseTarget)
    const newData = result.success
      ? result.output
      : DEFAULT_PACKAGE_NAME
    setPackageName(newData)
    if (newData.target === DEFAULT_PACKAGE_NAME.target) return
    router.push(`/${value}`)
  }

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
