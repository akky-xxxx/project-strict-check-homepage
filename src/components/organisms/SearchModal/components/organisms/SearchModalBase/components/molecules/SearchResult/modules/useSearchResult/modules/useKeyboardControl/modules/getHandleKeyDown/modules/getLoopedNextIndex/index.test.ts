import { getLoopedNextIndex } from "."

describe("getLoopedNextIndex", () => {
  it.each([
    [3, 0, 1],
    [3, 1, 2],
    [3, 2, 3],
    [3, 3, 0],
  ] as const)("maxIndexが%s、currentが%sの時、%sを返す", (maxIndex, current, output) => {
    expect(getLoopedNextIndex(maxIndex)(current)).toBe(output)
  })
})
