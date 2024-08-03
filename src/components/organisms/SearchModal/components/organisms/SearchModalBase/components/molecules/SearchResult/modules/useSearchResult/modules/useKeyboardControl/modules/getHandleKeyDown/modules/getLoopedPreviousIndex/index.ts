const SIBLING_INDEX = 1
const START_INDEX = 0

export const getLoopedPreviousIndex = (
  maxIndex: number,
) => (
  current: number,
) => (current > START_INDEX ? current - SIBLING_INDEX : maxIndex)
