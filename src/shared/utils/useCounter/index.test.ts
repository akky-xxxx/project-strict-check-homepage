import { act, renderHook } from "@testing-library/react"

import { useCounter } from "."

import type { RenderHookResult } from "@testing-library/react"

type HooksResult = ReturnType<typeof useCounter>

describe("useTest", () => {
  let renderHookResult: RenderHookResult<HooksResult, undefined>

  beforeEach(() => {
    renderHookResult = renderHook(() => useCounter())
  })

  it("count の初位置は0", () => {
    expect(renderHookResult.result.current.count).toBe(0)
  })

  it("初期状態から1回 handleDecrement を実行すると count は-1", () => {
    expect(renderHookResult.result.current.count).toBe(0)
    act(() => {
      renderHookResult.result.current.handleDecrement()
    })
    expect(renderHookResult.result.current.count).toBe(-1)
  })

  it("初期状態から1回 handleIncrement を実行すると count は1", () => {
    expect(renderHookResult.result.current.count).toBe(0)
    act(() => {
      renderHookResult.result.current.handleIncrement()
    })
    expect(renderHookResult.result.current.count).toBe(1)
  })
})
