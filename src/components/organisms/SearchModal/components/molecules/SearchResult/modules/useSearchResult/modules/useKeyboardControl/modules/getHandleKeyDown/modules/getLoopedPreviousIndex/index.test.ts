import { getLoopedPreviousIndex } from "."

describe("getLoopedPreviousIndex", () => {
  it.each([
    [3, 0, 3],
    [3, 1, 0],
    [3, 2, 1],
    [3, 3, 2],
  ] as const)("maxIndexが%s、currentが%sの時、%sを返す", (maxIndex, current, output) => {
    expect(getLoopedPreviousIndex(maxIndex)(current)).toBe(output)
  })
})
