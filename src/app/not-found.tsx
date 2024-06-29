import { Fragment } from "react"

export const runtime = "edge"

const NotFound = () => (
  <Fragment>
    <title>404: This page could not be found.</title>
    <div style={styles.error}>
      <div>
        <h1 className="next-error-h1" style={styles.h1}>
          404
        </h1>
        <div style={styles.desc}>
          <h2 style={styles.h2}>This page could not be found.</h2>
        </div>
      </div>
    </div>
  </Fragment>
)

export default NotFound

const styles = {
  error: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    fontFamily:
      'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
    height: "100vh",
    justifyContent: "center",
    textAlign: "center",
  },

  desc: {
    display: "inline-block",
  },

  h1: {
    display: "inline-block",
    fontSize: 24,
    fontWeight: 500,
    lineHeight: "49px",
    margin: "0 20px 0 0",
    padding: "0 23px 0 0",
    verticalAlign: "top",
  },

  h2: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "49px",
    margin: 0,
  },
} as const
