import type { Metadata } from "next"

type Input = {
  description: string
  keywords?: string[]
  title?: string
}

const DEFAULT_METADATA = {
  keywords: ["frontend", "static analysis", "eslint"],
  title: "Strict Check",
} as const satisfies Metadata

type GetMetadata = (input: Input) => Metadata

export const getMetadata: GetMetadata = (input) => {
  const { description, keywords, title } = input
  const optimizedKeywords = Array.isArray(keywords) ? keywords : []

  return {
    description,
    keywords: [optimizedKeywords, DEFAULT_METADATA.keywords].flat().filter(Boolean),
    title: [title, DEFAULT_METADATA.title].filter(Boolean).join(" | "),
  }
}
