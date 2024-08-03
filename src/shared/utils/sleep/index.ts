const DEFAULT_DURATION = 100

export const sleep = async (ms = DEFAULT_DURATION) => new Promise((resolve) => {
  setTimeout(resolve, ms)
})
