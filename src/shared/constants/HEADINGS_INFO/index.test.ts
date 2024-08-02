/* eslint-disable max-lines-per-function, max-lines, @typescript-eslint/max-params */
import { HEADINGS_INFO } from "."

describe("HEADINGS_INFO", () => {
  describe("eslint-config-sc-all", () => {
    describe("home", () => {
      it.each([
        [
          "PAGE_TITLE",
          "eslint-config-sc-all",
          "/packages/eslint-config-sc-all#package-name",
          "eslint-config-sc-all",
        ],
        [
          "USAGE",
          "Usage",
          "/packages/eslint-config-sc-all#usage",
          "eslint-config-sc-all",
        ],
        [
          "INSTALLATION",
          "Installation",
          "/packages/eslint-config-sc-all#installation",
          "eslint-config-sc-all",
        ],
        [
          "SETUP",
          "Setup",
          "/packages/eslint-config-sc-all#setup",
          "eslint-config-sc-all",
        ],
        [
          "ARGUMENTS",
          "Arguments",
          "/packages/eslint-config-sc-all#arguments",
          "eslint-config-sc-all > Setup",
        ],
      ] as const)("%s の name は「%s」, href は「%s」,  searchTitle は「%s」", (property, name, href, searchTitle) => {
        const output = { name, href, searchTitle }
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
          "/packages/eslint-config-sc-jest#package-name",
          "eslint-config-sc-jest",
        ],
        [
          "USAGE",
          "Usage",
          "/packages/eslint-config-sc-jest#usage",
          "eslint-config-sc-jest",
        ],
        [
          "INSTALLATION",
          "Installation",
          "/packages/eslint-config-sc-jest#installation",
          "eslint-config-sc-jest",
        ],
        [
          "SETUP",
          "Setup",
          "/packages/eslint-config-sc-jest#setup",
          "eslint-config-sc-jest",
        ],
        [
          "ARGUMENTS",
          "Arguments",
          "/packages/eslint-config-sc-jest#arguments",
          "eslint-config-sc-jest > Setup",
        ],
      ] as const)("%s の name は「%s」, href は「%s」,  searchTitle は「%s」", (property, name, href, searchTitle) => {
        const output = { name, href, searchTitle }
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
          "/packages/eslint-config-sc-js#package-name",
          "eslint-config-sc-js",
        ],
        [
          "USAGE",
          "Usage",
          "/packages/eslint-config-sc-js#usage",
          "eslint-config-sc-js",
        ],
        [
          "INSTALLATION",
          "Installation",
          "/packages/eslint-config-sc-js#installation",
          "eslint-config-sc-js",
        ],
        [
          "SETUP",
          "Setup",
          "/packages/eslint-config-sc-js#setup",
          "eslint-config-sc-js",
        ],
        [
          "ARGUMENTS",
          "Arguments",
          "/packages/eslint-config-sc-js#arguments",
          "eslint-config-sc-js > Setup",
        ],
      ] as const)("%s の name は「%s」, href は「%s」,  searchTitle は「%s」", (property, name, href, searchTitle) => {
        const output = { name, href, searchTitle }
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
          "/packages/eslint-config-sc-next#package-name",
          "eslint-config-sc-next",
        ],
        [
          "USAGE",
          "Usage",
          "/packages/eslint-config-sc-next#usage",
          "eslint-config-sc-next",
        ],
        [
          "INSTALLATION",
          "Installation",
          "/packages/eslint-config-sc-next#installation",
          "eslint-config-sc-next",
        ],
        [
          "SETUP",
          "Setup",
          "/packages/eslint-config-sc-next#setup",
          "eslint-config-sc-next",
        ],
        [
          "ARGUMENTS",
          "Arguments",
          "/packages/eslint-config-sc-next#arguments",
          "eslint-config-sc-next > Setup",
        ],
      ] as const)("%s の name は「%s」, href は「%s」,  searchTitle は「%s」", (property, name, href, searchTitle) => {
        const output = { name, href, searchTitle }
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
          "/packages/eslint-config-sc-react#package-name",
          "eslint-config-sc-react",
        ],
        [
          "USAGE",
          "Usage",
          "/packages/eslint-config-sc-react#usage",
          "eslint-config-sc-react",
        ],
        [
          "INSTALLATION",
          "Installation",
          "/packages/eslint-config-sc-react#installation",
          "eslint-config-sc-react",
        ],
        [
          "SETUP",
          "Setup",
          "/packages/eslint-config-sc-react#setup",
          "eslint-config-sc-react",
        ],
        [
          "ARGUMENTS",
          "Arguments",
          "/packages/eslint-config-sc-react#arguments",
          "eslint-config-sc-react > Setup",
        ],
      ] as const)("%s の name は「%s」, href は「%s」,  searchTitle は「%s」", (property, name, href, searchTitle) => {
        const output = { name, href, searchTitle }
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
          "/packages/eslint-config-sc-storybook#package-name",
          "eslint-config-sc-storybook",
        ],
        [
          "USAGE",
          "Usage",
          "/packages/eslint-config-sc-storybook#usage",
          "eslint-config-sc-storybook",
        ],
        [
          "INSTALLATION",
          "Installation",
          "/packages/eslint-config-sc-storybook#installation",
          "eslint-config-sc-storybook",
        ],
        [
          "SETUP",
          "Setup",
          "/packages/eslint-config-sc-storybook#setup",
          "eslint-config-sc-storybook",
        ],
        [
          "ARGUMENTS",
          "Arguments",
          "/packages/eslint-config-sc-storybook#arguments",
          "eslint-config-sc-storybook > Setup",
        ],
      ] as const)("%s の name は「%s」, href は「%s」,  searchTitle は「%s」", (property, name, href, searchTitle) => {
        const output = { name, href, searchTitle }
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
          "/packages/eslint-config-sc-ts#package-name",
          "eslint-config-sc-ts",
        ],
        [
          "USAGE",
          "Usage",
          "/packages/eslint-config-sc-ts#usage",
          "eslint-config-sc-ts",
        ],
        [
          "INSTALLATION",
          "Installation",
          "/packages/eslint-config-sc-ts#installation",
          "eslint-config-sc-ts",
        ],
        [
          "SETUP",
          "Setup",
          "/packages/eslint-config-sc-ts#setup",
          "eslint-config-sc-ts",
        ],
        [
          "ARGUMENTS",
          "Arguments",
          "/packages/eslint-config-sc-ts#arguments",
          "eslint-config-sc-ts > Setup",
        ],
      ] as const)("%s の name は「%s」, href は「%s」,  searchTitle は「%s」", (property, name, href, searchTitle) => {
        const output = { name, href, searchTitle }
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
          "/packages/eslint-plugin-sc-js#package-name",
          "eslint-plugin-sc-js",
        ],
        [
          "USAGE",
          "Usage",
          "/packages/eslint-plugin-sc-js#usage",
          "eslint-plugin-sc-js",
        ],
        [
          "INSTALLATION",
          "Installation",
          "/packages/eslint-plugin-sc-js#installation",
          "eslint-plugin-sc-js",
        ],
        [
          "SETUP",
          "Setup",
          "/packages/eslint-plugin-sc-js#setup",
          "eslint-plugin-sc-js",
        ],
      ] as const)("%s の name は「%s」, href は「%s」,  searchTitle は「%s」", (property, name, href, searchTitle) => {
        const output = { name, href, searchTitle }
        expect(HEADINGS_INFO.ESLINT_PLUGIN_SC_JS.HOME[property]).toStrictEqual(output)
      })
    })
    describe("rules", () => {
      it.each([
        [
          "PAGE_TITLE",
          "Rules of eslint-plugin-sc-js",
          "/packages/eslint-plugin-sc-js/rules#rules",
          "eslint-plugin-sc-js",
        ],
      ] as const)("%s の name は「%s」, href は「%s」,  searchTitle は「%s」", (property, name, href, searchTitle) => {
        const output = { name, href, searchTitle }
        expect(HEADINGS_INFO.ESLINT_PLUGIN_SC_JS.RULES[property]).toStrictEqual(output)
      })
    })
    describe("file-path-patterns", () => {
      it.each([
        [
          "PAGE_TITLE",
          "file-path-patterns",
          "/packages/eslint-plugin-sc-js/rules/file-path-patterns#rule-name",
          "eslint-plugin-sc-js",
        ],
        [
          "OPTIONS",
          "Rule Options",
          "/packages/eslint-plugin-sc-js/rules/file-path-patterns#rule-options",
          "eslint-plugin-sc-js > file-path-patterns",
        ],
        [
          "ALLOW_PATTERNS",
          "allowPatterns",
          "/packages/eslint-plugin-sc-js/rules/file-path-patterns#arrow-patterns",
          "eslint-plugin-sc-js > file-path-patterns > Rule Options",
        ],
      ] as const)("%s の name は「%s」, href は「%s」,  searchTitle は「%s」", (property, name, href, searchTitle) => {
        const output = { name, href, searchTitle }
        expect(HEADINGS_INFO.ESLINT_PLUGIN_SC_JS.FILE_PATH_PATTERNS[property]).toStrictEqual(output)
      })
    })
    describe("forbidden-multiple-named-exports", () => {
      it.each([
        [
          "PAGE_TITLE",
          "forbidden-multiple-named-exports",
          "/packages/eslint-plugin-sc-js/rules/forbidden-multiple-named-exports#rule-name",
          "eslint-plugin-sc-js",
        ],
        [
          "OPTIONS",
          "Rule Options",
          "/packages/eslint-plugin-sc-js/rules/forbidden-multiple-named-exports#rule-options",
          "eslint-plugin-sc-js > forbidden-multiple-named-exports",
        ],
      ] as const)("%s の name は「%s」, href は「%s」,  searchTitle は「%s」", (property, name, href, searchTitle) => {
        const output = { name, href, searchTitle }
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
          "/packages/eslint-plugin-sc-js/rules/individual-import#rule-name",
          "eslint-plugin-sc-js",
        ],
        [
          "OPTIONS",
          "Rule Options",
          "/packages/eslint-plugin-sc-js/rules/individual-import#rule-options",
          "eslint-plugin-sc-js > individual-import",
        ],
        [
          "TARGETS",
          "targets",
          "/packages/eslint-plugin-sc-js/rules/individual-import#targets",
          "eslint-plugin-sc-js > individual-import > Rule Options",
        ],
      ] as const)("%s の name は「%s」, href は「%s」,  searchTitle は「%s」", (property, name, href, searchTitle) => {
        const output = { name, href, searchTitle }
        expect(HEADINGS_INFO.ESLINT_PLUGIN_SC_JS.INDIVIDUAL_IMPORT[property]).toStrictEqual(output)
      })
    })
    describe("match-names-of-file-and-export", () => {
      it.each([
        [
          "PAGE_TITLE",
          "match-names-of-file-and-export",
          "/packages/eslint-plugin-sc-js/rules/match-names-of-file-and-export#rule-name",
          "eslint-plugin-sc-js",
        ],
        [
          "OPTIONS",
          "Rule Options",
          "/packages/eslint-plugin-sc-js/rules/match-names-of-file-and-export#rule-options",
          "eslint-plugin-sc-js > match-names-of-file-and-export",
        ],
        [
          "CAPTURES",
          "captures",
          "/packages/eslint-plugin-sc-js/rules/match-names-of-file-and-export#captures",
          "eslint-plugin-sc-js > match-names-of-file-and-export > Rule Options",
        ],
      ] as const)("%s の name は「%s」, href は「%s」,  searchTitle は「%s」", (property, name, href, searchTitle) => {
        const output = { name, href, searchTitle }
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
          "/packages/eslint-plugin-sc-js/rules/restrict-use-of-process-env#rule-name",
          "eslint-plugin-sc-js",
        ],
        [
          "OPTIONS",
          "Rule Options",
          "/packages/eslint-plugin-sc-js/rules/restrict-use-of-process-env#rule-options",
          "eslint-plugin-sc-js > restrict-use-of-process-env",
        ],
      ] as const)("%s の name は「%s」, href は「%s」,  searchTitle は「%s」", (property, name, href, searchTitle) => {
        const output = { name, href, searchTitle }
        expect(
          HEADINGS_INFO.ESLINT_PLUGIN_SC_JS.RESTRICT_USE_OF_PROCESS_ENV[property],
        ).toStrictEqual(output)
      })
    })
  })
})
