"use client"

import { useCounter } from "@shared/utils/useCounter"

export const Counter = () => {
  const { count, handleDecrement, handleIncrement } = useCounter()
  const display = `count: ${count.toString()}`

  return (
    <div>
      <div>{display}</div>
      <div>
        <button type="button" onClick={handleDecrement}>-</button>
        <button type="button" onClick={handleIncrement}>+</button>
      </div>
    </div>
  )
}
