import { css } from "@panda/css"

import type { TableProps } from "./types/TableProps"
import type { FC } from "react"

const FIRST_CELL_OF_BODY_ROW = 0

export const Table: FC<TableProps> = (props) => {
  const { items } = props
  const [headingRow, ...bodyRows] = items

  return (
    <table className={root}>
      <thead>
        <tr>
          {headingRow.map((headCell) => {
            const { content, key } = headCell

            return (
              <th key={key}>{content}</th>
            )
          })}
        </tr>
      </thead>

      <tbody>
        {bodyRows.map((bodyRow) => (
          <tr key={`body-tr-${bodyRow.at(FIRST_CELL_OF_BODY_ROW)?.key ?? ""}`}>
            {bodyRow.map((bodyCell) => {
              const { key, content } = bodyCell

              return (
                <td key={key}>{content}</td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const root = css({
  /* eslint-disable @typescript-eslint/naming-convention */
  "& th": {
    paddingBlock: 8,
    paddingInline: 12,
  },

  "& td": {
    paddingBlock: 8,
    paddingInline: 12,
  },

  "& > tbody > tr:nth-of-type(even)": {
    backgroundColor: "backgroundColor.case3",
  },
  "& > tbody > tr:nth-of-type(odd)": {
    backgroundColor: "backgroundColor.case2",
  },
  /* eslint-enable @typescript-eslint/naming-convention */
})
