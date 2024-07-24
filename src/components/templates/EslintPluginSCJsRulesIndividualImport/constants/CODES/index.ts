export const CODES = {
  OPTIONS: `{
  rules: {
    "sc-js/individual-import": [
      <enabled>,
      { "targets": <string>[] },
    ],
  },
}`,

  INCORRECT_EXAMPLE: `// "sc-js/individual-import": ["warn", { "targets": ["react"] }]
const [state, setState] = React.useState(1)
const changeHandler: React.ChangeEventHandler = () => {}
const Component = () => <React.Fragment>Component</React.Fragment>
`,

  CORRECT_EXAMPLE: `// "sc-js/individual-import": ["warn", { "targets": ["react"] }]
const [state, setState] = useState(1)
const changeHandler: ChangeEventHandler = () => {}
const Component = () => <Fragment>Component</Fragment>`,
} as const
