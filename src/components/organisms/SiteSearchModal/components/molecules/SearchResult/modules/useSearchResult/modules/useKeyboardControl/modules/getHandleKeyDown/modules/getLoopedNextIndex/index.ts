const SIBLING_INDEX = 1
const START_INDEX = 0

export const getLoopedNextIndex = (
  maxIndex: number,
) => (
  current: number,
) => (current < maxIndex ? current + SIBLING_INDEX : START_INDEX)
