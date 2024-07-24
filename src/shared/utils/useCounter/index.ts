import { useState } from "react"

const INITIAL_STATE = 0
const AMOUNT = 1

export const useCounter = () => {
  const [count, setCount] = useState(INITIAL_STATE)
  const handleDecrement = () => {
    setCount((current) => current - AMOUNT)
  }
  const handleIncrement = () => {
    setCount((current) => current + AMOUNT)
  }

  return { count, handleDecrement, handleIncrement }
}
