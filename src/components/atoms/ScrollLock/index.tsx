import type { FC } from "react"

type Props = {
  isLock: boolean
}

export const ScrollLock: FC<Props> = (props) => {
  const { isLock } = props
  if (!isLock) return null
  return (
    <div
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        // eslint-disable-next-line @typescript-eslint/naming-convention
        __html: "<style type='text/css'>html,body { overflow: hidden; }</style>",
      }}
    />
  )
}
