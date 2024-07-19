import { useRouter } from "next/navigation"
import { safeParse } from "valibot"

import { DEFAULT_PACKAGE_NAME } from "@shared/constants/DEFAULT_PACKAGE_NAME"
import { packageNameSchema } from "@shared/schemas/packageNameSchema"
import { usePackageNameStore } from "@shared/storeProviders/packageName"

import { getTargetItems } from "../getTargetItems"

import type { PackageName } from "@shared/types/PackageName"
import type { ChangeEventHandler } from "react"

type Input = {
  setTargetItems: (input: Array<PackageName["target"]>) => void
}

export const useGetHandlers = (input: Input) => {
  const { setTargetItems } = input
  const {
    packageName,
    setPackageCategoryName,
    setPackageName,
    setPackageTargetName,
  } = usePackageNameStore((store) => store)
  const router = useRouter()
  const handleChangeCategoryName: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const { currentTarget: { value } } = event
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
    const { currentTarget: { value } } = event
    const parseTarget = {
      ...packageName,
      target: value,
    }
    const result = safeParse(packageNameSchema, parseTarget)
    const newData = result.success ? result.output : DEFAULT_PACKAGE_NAME
    setPackageTargetName(newData.target)
    if (newData.target === DEFAULT_PACKAGE_NAME.target) return
    router.push(`/eslint-${newData.category}-${newData.target}`)
  }

  const handleChangePackageName: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const { currentTarget: { value } } = event
    const [linter, category, prefix, target] = value.split("-")
    const parseTarget = { category, linter, target: `${prefix ?? ""}-${target ?? ""}` }
    const result = safeParse(packageNameSchema, parseTarget)
    const newData = result.success ? result.output : DEFAULT_PACKAGE_NAME
    setPackageName(newData)
    router.push(`/${newData.linter}-${newData.category}-${newData.target}`)
  }

  return { handleChangeCategoryName, handleChangePackageName, handleChangeTargetName }
}
