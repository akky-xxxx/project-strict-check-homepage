/* eslint-disable max-lines-per-function, max-lines, @typescript-eslint/max-params */
import { HEADINGS_INFO } from "."

describe("HEADINGS_INFO", () => {
  describe("eslint-config-sc-all", () => {
    describe("home", () => {
      it.each([
        [
          "PAGE_TITLE",
          "eslint-config-sc-all",
          "package-name",
          "/packages/eslint-config-sc-all",
          "eslint-config-sc-all",
        ],
        [
          "USAGE",
          "Usage",
          "usage",
          "/packages/eslint-config-sc-all",
          "eslint-config-sc-all",
        ],
        [
          "INSTALLATION",
          "Installation",
          "installation",
          "/packages/eslint-config-sc-all",
          "eslint-config-sc-all",
        ],
        [
          "SETUP",
          "Setup",
          "setup",
          "/packages/eslint-config-sc-all",
          "eslint-config-sc-all",
        ],
        [
          "ARGUMENTS",
          "Arguments",
          "arguments",
          "/packages/eslint-config-sc-all",
          "eslint-config-sc-all > Setup",
        ],
      ] as const)("%s の name は「%s」, href は「%s」, hash は「%s」,  searchTitle は「%s」", (property, name, hash, href, searchTitle) => {
        const output = { name, hash, href, searchTitle }
        expect(HEADINGS_INFO.ESLINT_CONFIG_ALL.HOME[property]).toStrictEqual(output)
      })
    })
  })
  describe("eslint-config-sc-jest", () => {
    describe("home", () => {
      it.each([
        [
          "PAGE_TITLE",
          "eslint-config-sc-jest",
          "package-name",
          "/packages/eslint-config-sc-jest",
          "eslint-config-sc-jest",
        ],
        [
          "USAGE",
          "Usage",
          "usage",
          "/packages/eslint-config-sc-jest",
          "eslint-config-sc-jest",
        ],
        [
          "INSTALLATION",
          "Installation",
          "installation",
          "/packages/eslint-config-sc-jest",
          "eslint-config-sc-jest",
        ],
        [
          "SETUP",
          "Setup",
          "setup",
          "/packages/eslint-config-sc-jest",
          "eslint-config-sc-jest",
        ],
      ] as const)("%s の name は「%s」, href は「%s」, hash は「%s」,  searchTitle は「%s」", (property, name, hash, href, searchTitle) => {
        const output = { name, hash, href, searchTitle }
        expect(HEADINGS_INFO.ESLINT_CONFIG_JEST.HOME[property]).toStrictEqual(output)
      })
    })
  })
  describe("eslint-config-sc-js", () => {
    describe("home", () => {
      it.each([
        [
          "PAGE_TITLE",
          "eslint-config-sc-js",
          "package-name",
          "/packages/eslint-config-sc-js",
          "eslint-config-sc-js",
        ],
        [
          "USAGE",
          "Usage",
          "usage",
          "/packages/eslint-config-sc-js",
          "eslint-config-sc-js",
        ],
        [
          "INSTALLATION",
          "Installation",
          "installation",
          "/packages/eslint-config-sc-js",
          "eslint-config-sc-js",
        ],
        [
          "SETUP",
          "Setup",
          "setup",
          "/packages/eslint-config-sc-js",
          "eslint-config-sc-js",
        ],
      ] as const)("%s の name は「%s」, href は「%s」, hash は「%s」,  searchTitle は「%s」", (property, name, hash, href, searchTitle) => {
        const output = { name, hash, href, searchTitle }
        expect(HEADINGS_INFO.ESLINT_CONFIG_JS.HOME[property]).toStrictEqual(output)
      })
    })
  })
  describe("eslint-config-sc-next", () => {
    describe("home", () => {
      it.each([
        [
          "PAGE_TITLE",
          "eslint-config-sc-next",
          "package-name",
          "/packages/eslint-config-sc-next",
          "eslint-config-sc-next",
        ],
        [
          "USAGE",
          "Usage",
          "usage",
          "/packages/eslint-config-sc-next",
          "eslint-config-sc-next",
        ],
        [
          "INSTALLATION",
          "Installation",
          "installation",
          "/packages/eslint-config-sc-next",
          "eslint-config-sc-next",
        ],
        [
          "SETUP",
          "Setup",
          "setup",
          "/packages/eslint-config-sc-next",
          "eslint-config-sc-next",
        ],
      ] as const)("%s の name は「%s」, href は「%s」, hash は「%s」,  searchTitle は「%s」", (property, name, hash, href, searchTitle) => {
        const output = { name, hash, href, searchTitle }
        expect(HEADINGS_INFO.ESLINT_CONFIG_NEXT.HOME[property]).toStrictEqual(output)
      })
    })
  })
  describe("eslint-config-sc-react", () => {
    describe("home", () => {
      it.each([
        [
          "PAGE_TITLE",
          "eslint-config-sc-react",
          "package-name",
          "/packages/eslint-config-sc-react",
          "eslint-config-sc-react",
        ],
        [
          "USAGE",
          "Usage",
          "usage",
          "/packages/eslint-config-sc-react",
          "eslint-config-sc-react",
        ],
        [
          "INSTALLATION",
          "Installation",
          "installation",
          "/packages/eslint-config-sc-react",
          "eslint-config-sc-react",
        ],
        [
          "SETUP",
          "Setup",
          "setup",
          "/packages/eslint-config-sc-react",
          "eslint-config-sc-react",
        ],
      ] as const)("%s の name は「%s」, href は「%s」, hash は「%s」,  searchTitle は「%s」", (property, name, hash, href, searchTitle) => {
        const output = { name, hash, href, searchTitle }
        expect(HEADINGS_INFO.ESLINT_CONFIG_REACT.HOME[property]).toStrictEqual(output)
      })
    })
  })
  describe("eslint-config-sc-storybook", () => {
    describe("home", () => {
      it.each([
        [
          "PAGE_TITLE",
          "eslint-config-sc-storybook",
          "package-name",
          "/packages/eslint-config-sc-storybook",
          "eslint-config-sc-storybook",
        ],
        [
          "USAGE",
          "Usage",
          "usage",
          "/packages/eslint-config-sc-storybook",
          "eslint-config-sc-storybook",
        ],
        [
          "INSTALLATION",
          "Installation",
          "installation",
          "/packages/eslint-config-sc-storybook",
          "eslint-config-sc-storybook",
        ],
        [
          "SETUP",
          "Setup",
          "setup",
          "/packages/eslint-config-sc-storybook",
          "eslint-config-sc-storybook",
        ],
      ] as const)("%s の name は「%s」, href は「%s」, hash は「%s」,  searchTitle は「%s」", (property, name, hash, href, searchTitle) => {
        const output = { name, hash, href, searchTitle }
        expect(HEADINGS_INFO.ESLINT_CONFIG_STORYBOOK.HOME[property]).toStrictEqual(output)
      })
    })
  })
  describe("eslint-config-sc-ts", () => {
    describe("home", () => {
      it.each([
        [
          "PAGE_TITLE",
          "eslint-config-sc-ts",
          "package-name",
          "/packages/eslint-config-sc-ts",
          "eslint-config-sc-ts",
        ],
        [
          "USAGE",
          "Usage",
          "usage",
          "/packages/eslint-config-sc-ts",
          "eslint-config-sc-ts",
        ],
        [
          "INSTALLATION",
          "Installation",
          "installation",
          "/packages/eslint-config-sc-ts",
          "eslint-config-sc-ts",
        ],
        [
          "SETUP",
          "Setup",
          "setup",
          "/packages/eslint-config-sc-ts",
          "eslint-config-sc-ts",
        ],
      ] as const)("%s の name は「%s」, href は「%s」, hash は「%s」,  searchTitle は「%s」", (property, name, hash, href, searchTitle) => {
        const output = { name, hash, href, searchTitle }
        expect(HEADINGS_INFO.ESLINT_CONFIG_TS.HOME[property]).toStrictEqual(output)
      })
    })
  })
  describe("eslint-plugin-sc-js", () => {
    describe("home", () => {
      it.each([
        [
          "PAGE_TITLE",
          "eslint-plugin-sc-js",
          "package-name",
          "/packages/eslint-plugin-sc-js",
          "eslint-plugin-sc-js",
        ],
        [
          "USAGE",
          "Usage",
          "usage",
          "/packages/eslint-plugin-sc-js",
          "eslint-plugin-sc-js",
        ],
        [
          "INSTALLATION",
          "Installation",
          "installation",
          "/packages/eslint-plugin-sc-js",
          "eslint-plugin-sc-js",
        ],
        [
          "SETUP",
          "Setup",
          "setup",
          "/packages/eslint-plugin-sc-js",
          "eslint-plugin-sc-js",
        ],
      ] as const)("%s の name は「%s」, href は「%s」, hash は「%s」,  searchTitle は「%s」", (property, name, hash, href, searchTitle) => {
        const output = { name, hash, href, searchTitle }
        expect(HEADINGS_INFO.ESLINT_PLUGIN_SC_JS.HOME[property]).toStrictEqual(output)
      })
    })
    describe("rules", () => {
      it.each([
        [
          "PAGE_TITLE",
          "Rules of eslint-plugin-sc-js",
          "rules",
          "/packages/eslint-plugin-sc-js/rules",
          "eslint-plugin-sc-js",
        ],
      ] as const)("%s の name は「%s」, href は「%s」, hash は「%s」,  searchTitle は「%s」", (property, name, hash, href, searchTitle) => {
        const output = { name, hash, href, searchTitle }
        expect(HEADINGS_INFO.ESLINT_PLUGIN_SC_JS.RULES[property]).toStrictEqual(output)
      })
    })
    describe("file-path-patterns", () => {
      it.each([
        [
          "PAGE_TITLE",
          "file-path-patterns",
          "rule-name",
          "/packages/eslint-plugin-sc-js/rules/file-path-patterns",
          "eslint-plugin-sc-js",
        ],
        [
          "OPTIONS",
          "Rule Options",
          "rule-options",
          "/packages/eslint-plugin-sc-js/rules/file-path-patterns",
          "eslint-plugin-sc-js > file-path-patterns",
        ],
        [
          "ALLOW_PATTERNS",
          "allowPatterns",
          "arrow-patterns",
          "/packages/eslint-plugin-sc-js/rules/file-path-patterns",
          "eslint-plugin-sc-js > file-path-patterns > Rule Options",
        ],
      ] as const)("%s の name は「%s」, href は「%s」, hash は「%s」,  searchTitle は「%s」", (property, name, hash, href, searchTitle) => {
        const output = { name, hash, href, searchTitle }
        expect(HEADINGS_INFO.ESLINT_PLUGIN_SC_JS.FILE_PATH_PATTERNS[property]).toStrictEqual(output)
      })
    })
    describe("forbidden-multiple-named-exports", () => {
      it.each([
        [
          "PAGE_TITLE",
          "forbidden-multiple-named-exports",
          "rule-name",
          "/packages/eslint-plugin-sc-js/rules/forbidden-multiple-named-exports",
          "eslint-plugin-sc-js",
        ],
        [
          "OPTIONS",
          "Rule Options",
          "rule-options",
          "/packages/eslint-plugin-sc-js/rules/forbidden-multiple-named-exports",
          "eslint-plugin-sc-js > forbidden-multiple-named-exports",
        ],
      ] as const)("%s の name は「%s」, href は「%s」, hash は「%s」,  searchTitle は「%s」", (property, name, hash, href, searchTitle) => {
        const output = { name, hash, href, searchTitle }
        expect(
          HEADINGS_INFO.ESLINT_PLUGIN_SC_JS.FORBIDDEN_MULTIPLE_NAMED_EXPORTS[property],
        ).toStrictEqual(output)
      })
    })
    describe("individual-import", () => {
      it.each([
        [
          "PAGE_TITLE",
          "individual-import",
          "rule-name",
          "/packages/eslint-plugin-sc-js/rules/individual-import",
          "eslint-plugin-sc-js",
        ],
        [
          "OPTIONS",
          "Rule Options",
          "rule-options",
          "/packages/eslint-plugin-sc-js/rules/individual-import",
          "eslint-plugin-sc-js > individual-import",
        ],
        [
          "TARGETS",
          "targets",
          "targets",
          "/packages/eslint-plugin-sc-js/rules/individual-import",
          "eslint-plugin-sc-js > individual-import > Rule Options",
        ],
      ] as const)("%s の name は「%s」, href は「%s」, hash は「%s」,  searchTitle は「%s」", (property, name, hash, href, searchTitle) => {
        const output = { name, hash, href, searchTitle }
        expect(HEADINGS_INFO.ESLINT_PLUGIN_SC_JS.INDIVIDUAL_IMPORT[property]).toStrictEqual(output)
      })
    })
    describe("match-names-of-file-and-export", () => {
      it.each([
        [
          "PAGE_TITLE",
          "match-names-of-file-and-export",
          "rule-name",
          "/packages/eslint-plugin-sc-js/rules/match-names-of-file-and-export",
          "eslint-plugin-sc-js",
        ],
        [
          "OPTIONS",
          "Rule Options",
          "rule-options",
          "/packages/eslint-plugin-sc-js/rules/match-names-of-file-and-export",
          "eslint-plugin-sc-js > match-names-of-file-and-export",
        ],
        [
          "CAPTURES",
          "captures",
          "captures",
          "/packages/eslint-plugin-sc-js/rules/match-names-of-file-and-export",
          "eslint-plugin-sc-js > match-names-of-file-and-export > Rule Options",
        ],
      ] as const)("%s の name は「%s」, href は「%s」, hash は「%s」,  searchTitle は「%s」", (property, name, hash, href, searchTitle) => {
        const output = { name, hash, href, searchTitle }
        expect(
          HEADINGS_INFO.ESLINT_PLUGIN_SC_JS.MATCH_NAMES_OF_FILE_AND_EXPORT[property],
        ).toStrictEqual(output)
      })
    })
    describe("restrict-use-of-process-env", () => {
      it.each([
        [
          "PAGE_TITLE",
          "restrict-use-of-process-env",
          "rule-name",
          "/packages/eslint-plugin-sc-js/rules/restrict-use-of-process-env",
          "eslint-plugin-sc-js",
        ],
        [
          "OPTIONS",
          "Rule Options",
          "rule-options",
          "/packages/eslint-plugin-sc-js/rules/restrict-use-of-process-env",
          "eslint-plugin-sc-js > restrict-use-of-process-env",
        ],
      ] as const)("%s の name は「%s」, href は「%s」, hash は「%s」,  searchTitle は「%s」", (property, name, hash, href, searchTitle) => {
        const output = { name, hash, href, searchTitle }
        expect(
          HEADINGS_INFO.ESLINT_PLUGIN_SC_JS.RESTRICT_USE_OF_PROCESS_ENV[property],
        ).toStrictEqual(output)
      })
    })
  })
})
