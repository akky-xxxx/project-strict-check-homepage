import type { ChangeEventHandler, FC } from "react"

type Props = {
  className: string
  handleChange: ChangeEventHandler<HTMLSelectElement>
  items: string[]
  value: string
}

export const Select: FC<Props> = (props) => {
  const { className, handleChange, items, value } = props

  return (
    <select
      className={className}
      value={value}
      onChange={handleChange}
    >
      {items.map((itemName) => (
        <option key={itemName} value={itemName}>
          {itemName}
        </option>
      ))}
    </select>
  )
}
