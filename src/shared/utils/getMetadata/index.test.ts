import { getMetadata } from "."

type GetMetadata = typeof getMetadata
type Parameter = Parameters<GetMetadata>[0]
type Return = ReturnType<GetMetadata>

type TestCase = [Parameter, Return]

const TEST_CASES = [
  [
    {
      description: "description value",
    },
    {
      description: "description value",
      keywords: ["frontend", "static analysis", "eslint"],
      title: "Strict Check",
    },
  ],
  [
    {
      description: "description value",
      keywords: [],
    },
    {
      description: "description value",
      keywords: ["frontend", "static analysis", "eslint"],
      title: "Strict Check",
    },
  ],
  [
    {
      description: "description value",
      keywords: ["keyword"],
    },
    {
      description: "description value",
      keywords: ["keyword", "frontend", "static analysis", "eslint"],
      title: "Strict Check",
    },
  ],
  [
    {
      description: "description value",
      title: "added title",
    },
    {
      description: "description value",
      keywords: ["frontend", "static analysis", "eslint"],
      title: "added title | Strict Check",
    },
  ],
  [
    {
      description: "description value",
      keywords: ["keyword"],
      title: "added title",
    },
    {
      description: "description value",
      keywords: ["keyword", "frontend", "static analysis", "eslint"],
      title: "added title | Strict Check",
    },
  ],
] satisfies TestCase[]

describe("getMetadata", () => {
  it.each<TestCase>(TEST_CASES)("引数が %o の時、 %o を返す", (input, output) => {
    expect(getMetadata(input)).toStrictEqual(output)
  })
})
