import { css } from "@panda/css"

import { Counter } from "../components/molecules/Counter"

import type { FunctionalComponent } from "preact"

export const runtime = "edge"

const HomePage: FunctionalComponent = () => (
  <div>
    <div className={rootStyle}>Home</div>
    <Counter />
  </div>
)

export default HomePage

const rootStyle = css({
  backgroundColor: "#faa",
})
