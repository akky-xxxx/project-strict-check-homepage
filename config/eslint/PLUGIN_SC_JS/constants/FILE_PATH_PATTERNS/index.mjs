const tests = [/\/index.test.tsx?/]
const stories = [/\/index.stories.tsx/]
const modules = [/modules\/[a-z][\dA-Za-z]+\/index.ts/]
const styles = [/styles\/[a-z][\dA-Za-z]+\/index.ts/]
const constants = [/constants\/[A-Z_]+\/index.ts/]
const declarations = [/declarations\/[\d@-_a-z]+\/index(?:\.d)?.ts/]
const types = [/types\/[A-Z][\dA-Za-z]+\/index.ts/]

const icons = [/components\/icons\/[A-Z][\dA-Za-z]Icon+\/index.tsx/]
const components = [/components\/(?:atoms|molecules|organisms|templates)\/[A-Z][\dA-Za-z]+\/index\.tsx/]

const nextRouting = "layout|page|loading|not-found|error|global-error|route|template|default"
const page = new RegExp(`app(?:/[^/]+)*/(?:${nextRouting}).tsx`)
const pages = [page]

const utils = [/shared\/utils\/[a-z][\dA-Za-z]+\/index.ts/]

const allowPatterns = [
  tests,
  stories,
  modules,
  styles,
  constants,
  declarations,
  types,

  icons,
  components,

  pages,

  utils,
].flat()

export const FILE_PATH_PATTERNS = [2, { allowPatterns }]
