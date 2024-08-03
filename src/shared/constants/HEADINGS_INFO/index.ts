/* eslint-disable max-lines */
import { pagesPath } from "@lib/$path"

import type { HeadingsInfo } from "@shared/types/HeadingsInfo"

const ESLINT_CONFIG_SC_ALL = "eslint-config-sc-all"
const ESLINT_CONFIG_SC_JEST = "eslint-config-sc-jest"
const ESLINT_CONFIG_SC_JS = "eslint-config-sc-js"
const ESLINT_CONFIG_SC_NEXT = "eslint-config-sc-next"
const ESLINT_CONFIG_SC_REACT = "eslint-config-sc-react"
const ESLINT_CONFIG_SC_STORYBOOK = "eslint-config-sc-storybook"
const ESLINT_CONFIG_SC_TS = "eslint-config-sc-ts"
const ESLINT_PLUGIN_SC_JS = "eslint-plugin-sc-js"

const RULE_OPTIONS = "Rule Options"

const HASH_PACKAGE_NAME = "package-name"
const HASH_RULE_OPTIONS = "rule-options"

export const HEADINGS_INFO = {
  /* eslint-disable sort-keys */
  ESLINT_CONFIG_ALL: {
    HOME: {
      PAGE_TITLE: {
        name: ESLINT_CONFIG_SC_ALL,
        hash: HASH_PACKAGE_NAME,
        href: pagesPath.packages.eslint_config_sc_all.$url().path,
        searchTitle: ESLINT_CONFIG_SC_ALL,
      },
      USAGE: {
        name: "Usage",
        hash: "usage",
        href: pagesPath.packages.eslint_config_sc_all.$url().path,
        searchTitle: ESLINT_CONFIG_SC_ALL,
      },
      INSTALLATION: {
        name: "Installation",
        hash: "installation",
        href: pagesPath.packages.eslint_config_sc_all.$url().path,
        searchTitle: ESLINT_CONFIG_SC_ALL,
      },
      SETUP: {
        name: "Setup",
        hash: "setup",
        href: pagesPath.packages.eslint_config_sc_all.$url().path,
        searchTitle: ESLINT_CONFIG_SC_ALL,
      },
      ARGUMENTS: {
        name: "Arguments",
        hash: "arguments",
        href: pagesPath.packages.eslint_config_sc_all.$url().path,
        searchTitle: `${ESLINT_CONFIG_SC_ALL} > Setup`,
      },
    },
  },
  ESLINT_CONFIG_JEST: {
    HOME: {
      PAGE_TITLE: {
        name: ESLINT_CONFIG_SC_JEST,
        hash: HASH_PACKAGE_NAME,
        href: pagesPath.packages.eslint_config_sc_jest.$url().path,
        searchTitle: ESLINT_CONFIG_SC_JEST,
      },
      USAGE: {
        name: "Usage",
        hash: "usage",
        href: pagesPath.packages.eslint_config_sc_jest.$url().path,
        searchTitle: ESLINT_CONFIG_SC_JEST,
      },
      INSTALLATION: {
        name: "Installation",
        hash: "installation",
        href: pagesPath.packages.eslint_config_sc_jest.$url().path,
        searchTitle: ESLINT_CONFIG_SC_JEST,
      },
      SETUP: {
        name: "Setup",
        hash: "setup",
        href: pagesPath.packages.eslint_config_sc_jest.$url().path,
        searchTitle: ESLINT_CONFIG_SC_JEST,
      },
    },
  },
  ESLINT_CONFIG_JS: {
    HOME: {
      PAGE_TITLE: {
        name: ESLINT_CONFIG_SC_JS,
        hash: HASH_PACKAGE_NAME,
        href: pagesPath.packages.eslint_config_sc_js.$url().path,
        searchTitle: ESLINT_CONFIG_SC_JS,
      },
      USAGE: {
        name: "Usage",
        hash: "usage",
        href: pagesPath.packages.eslint_config_sc_js.$url().path,
        searchTitle: ESLINT_CONFIG_SC_JS,
      },
      INSTALLATION: {
        name: "Installation",
        hash: "installation",
        href: pagesPath.packages.eslint_config_sc_js.$url().path,
        searchTitle: ESLINT_CONFIG_SC_JS,
      },
      SETUP: {
        name: "Setup",
        hash: "setup",
        href: pagesPath.packages.eslint_config_sc_js.$url().path,
        searchTitle: ESLINT_CONFIG_SC_JS,
      },
    },
  },
  ESLINT_CONFIG_NEXT: {
    HOME: {
      PAGE_TITLE: {
        name: ESLINT_CONFIG_SC_NEXT,
        hash: HASH_PACKAGE_NAME,
        href: pagesPath.packages.eslint_config_sc_next.$url().path,
        searchTitle: ESLINT_CONFIG_SC_NEXT,
      },
      USAGE: {
        name: "Usage",
        hash: "usage",
        href: pagesPath.packages.eslint_config_sc_next.$url().path,
        searchTitle: ESLINT_CONFIG_SC_NEXT,
      },
      INSTALLATION: {
        name: "Installation",
        hash: "installation",
        href: pagesPath.packages.eslint_config_sc_next.$url().path,
        searchTitle: ESLINT_CONFIG_SC_NEXT,
      },
      SETUP: {
        name: "Setup",
        hash: "setup",
        href: pagesPath.packages.eslint_config_sc_next.$url().path,
        searchTitle: ESLINT_CONFIG_SC_NEXT,
      },
    },
  },
  ESLINT_CONFIG_REACT: {
    HOME: {
      PAGE_TITLE: {
        name: ESLINT_CONFIG_SC_REACT,
        hash: HASH_PACKAGE_NAME,
        href: pagesPath.packages.eslint_config_sc_react.$url().path,
        searchTitle: ESLINT_CONFIG_SC_REACT,
      },
      USAGE: {
        name: "Usage",
        hash: "usage",
        href: pagesPath.packages.eslint_config_sc_react.$url().path,
        searchTitle: ESLINT_CONFIG_SC_REACT,
      },
      INSTALLATION: {
        name: "Installation",
        hash: "installation",
        href: pagesPath.packages.eslint_config_sc_react.$url().path,
        searchTitle: ESLINT_CONFIG_SC_REACT,
      },
      SETUP: {
        name: "Setup",
        hash: "setup",
        href: pagesPath.packages.eslint_config_sc_react.$url().path,
        searchTitle: ESLINT_CONFIG_SC_REACT,
      },
    },
  },
  ESLINT_CONFIG_STORYBOOK: {
    HOME: {
      PAGE_TITLE: {
        name: ESLINT_CONFIG_SC_STORYBOOK,
        hash: HASH_PACKAGE_NAME,
        href: pagesPath.packages.eslint_config_sc_storybook.$url().path,
        searchTitle: ESLINT_CONFIG_SC_STORYBOOK,
      },
      USAGE: {
        name: "Usage",
        hash: "usage",
        href: pagesPath.packages.eslint_config_sc_storybook.$url().path,
        searchTitle: ESLINT_CONFIG_SC_STORYBOOK,
      },
      INSTALLATION: {
        name: "Installation",
        hash: "installation",
        href: pagesPath.packages.eslint_config_sc_storybook.$url().path,
        searchTitle: ESLINT_CONFIG_SC_STORYBOOK,
      },
      SETUP: {
        name: "Setup",
        hash: "setup",
        href: pagesPath.packages.eslint_config_sc_storybook.$url().path,
        searchTitle: ESLINT_CONFIG_SC_STORYBOOK,
      },
    },
  },
  ESLINT_CONFIG_TS: {
    HOME: {
      PAGE_TITLE: {
        name: ESLINT_CONFIG_SC_TS,
        hash: HASH_PACKAGE_NAME,
        href: pagesPath.packages.eslint_config_sc_ts.$url().path,
        searchTitle: ESLINT_CONFIG_SC_TS,
      },
      USAGE: {
        name: "Usage",
        hash: "usage",
        href: pagesPath.packages.eslint_config_sc_ts.$url().path,
        searchTitle: ESLINT_CONFIG_SC_TS,
      },
      INSTALLATION: {
        name: "Installation",
        hash: "installation",
        href: pagesPath.packages.eslint_config_sc_ts.$url().path,
        searchTitle: ESLINT_CONFIG_SC_TS,
      },
      SETUP: {
        name: "Setup",
        hash: "setup",
        href: pagesPath.packages.eslint_config_sc_ts.$url().path,
        searchTitle: ESLINT_CONFIG_SC_TS,
      },
    },
  },
  ESLINT_PLUGIN_SC_JS: {
    HOME: {
      PAGE_TITLE: {
        name: ESLINT_PLUGIN_SC_JS,
        hash: HASH_PACKAGE_NAME,
        href: pagesPath.packages.eslint_plugin_sc_js.$url().path,
        searchTitle: ESLINT_PLUGIN_SC_JS,
      },
      USAGE: {
        name: "Usage",
        hash: "usage",
        href: pagesPath.packages.eslint_plugin_sc_js.$url().path,
        searchTitle: ESLINT_PLUGIN_SC_JS,
      },
      INSTALLATION: {
        name: "Installation",
        hash: "installation",
        href: pagesPath.packages.eslint_plugin_sc_js.$url().path,
        searchTitle: ESLINT_PLUGIN_SC_JS,
      },
      SETUP: {
        name: "Setup",
        hash: "setup",
        href: pagesPath.packages.eslint_plugin_sc_js.$url().path,
        searchTitle: ESLINT_PLUGIN_SC_JS,
      },
      RULES: {
        name: "Rules",
        hash: "rules",
        href: pagesPath.packages.eslint_plugin_sc_js.$url().path,
        searchTitle: `${ESLINT_PLUGIN_SC_JS} > Rules`,
      },
    },
    RULES: {
      PAGE_TITLE: {
        name: `Rules of ${ESLINT_PLUGIN_SC_JS}`,
        hash: "rules",
        href: pagesPath.packages.eslint_plugin_sc_js.rules.$url().path,
        searchTitle: ESLINT_PLUGIN_SC_JS,
      },
    },
    FILE_PATH_PATTERNS: {
      PAGE_TITLE: {
        name: "file-path-patterns",
        hash: "rule-name",
        href: pagesPath.packages.eslint_plugin_sc_js.rules.file_path_patterns.$url().path,
        searchTitle: ESLINT_PLUGIN_SC_JS,
      },
      OPTIONS: {
        name: RULE_OPTIONS,
        hash: HASH_RULE_OPTIONS,
        href: pagesPath.packages.eslint_plugin_sc_js.rules.file_path_patterns.$url().path,
        searchTitle: `${ESLINT_PLUGIN_SC_JS} > file-path-patterns`,
      },
      ALLOW_PATTERNS: {
        name: "allowPatterns",
        hash: "allow-patterns",
        href: pagesPath.packages.eslint_plugin_sc_js.rules.file_path_patterns.$url().path,
        searchTitle: `${ESLINT_PLUGIN_SC_JS} > file-path-patterns > Rule Options`,
      },
    },
    FORBIDDEN_MULTIPLE_NAMED_EXPORTS: {
      PAGE_TITLE: {
        name: "forbidden-multiple-named-exports",
        hash: "rule-name",
        href:
          pagesPath.packages.eslint_plugin_sc_js.rules.forbidden_multiple_named_exports.$url().path,
        searchTitle: ESLINT_PLUGIN_SC_JS,
      },
      OPTIONS: {
        name: RULE_OPTIONS,
        hash: HASH_RULE_OPTIONS,
        href:
          pagesPath.packages.eslint_plugin_sc_js.rules.forbidden_multiple_named_exports.$url().path,
        searchTitle: `${ESLINT_PLUGIN_SC_JS} > forbidden-multiple-named-exports`,
      },
    },
    INDIVIDUAL_IMPORT: {
      PAGE_TITLE: {
        name: "individual-import",
        hash: "rule-name",
        href: pagesPath.packages.eslint_plugin_sc_js.rules.individual_import.$url().path,
        searchTitle: ESLINT_PLUGIN_SC_JS,
      },
      OPTIONS: {
        name: RULE_OPTIONS,
        hash: HASH_RULE_OPTIONS,
        href: pagesPath.packages.eslint_plugin_sc_js.rules.individual_import.$url().path,
        searchTitle: `${ESLINT_PLUGIN_SC_JS} > individual-import`,
      },
      TARGETS: {
        name: "targets",
        hash: "targets",
        href: pagesPath.packages.eslint_plugin_sc_js.rules.individual_import.$url().path,
        searchTitle: `${ESLINT_PLUGIN_SC_JS} > individual-import > Rule Options`,
      },
    },
    MATCH_NAMES_OF_FILE_AND_EXPORT: {
      PAGE_TITLE: {
        name: "match-names-of-file-and-export",
        hash: "rule-name",
        href:
          pagesPath.packages.eslint_plugin_sc_js.rules.match_names_of_file_and_export.$url().path,
        searchTitle: ESLINT_PLUGIN_SC_JS,
      },
      OPTIONS: {
        name: RULE_OPTIONS,
        hash: HASH_RULE_OPTIONS,
        href:
          pagesPath.packages.eslint_plugin_sc_js.rules.match_names_of_file_and_export.$url().path,
        searchTitle: `${ESLINT_PLUGIN_SC_JS} > match-names-of-file-and-export`,
      },
      CAPTURES: {
        name: "captures",
        hash: "captures",
        href:
          pagesPath.packages.eslint_plugin_sc_js.rules.match_names_of_file_and_export.$url().path,
        searchTitle: `${ESLINT_PLUGIN_SC_JS} > match-names-of-file-and-export > Rule Options`,
      },
    },
    RESTRICT_USE_OF_PROCESS_ENV: {
      PAGE_TITLE: {
        name: "restrict-use-of-process-env",
        hash: "rule-name",
        href: pagesPath.packages.eslint_plugin_sc_js.rules.restrict_use_of_process_env.$url().path,
        searchTitle: ESLINT_PLUGIN_SC_JS,
      },
      OPTIONS: {
        name: RULE_OPTIONS,
        hash: HASH_RULE_OPTIONS,
        href: pagesPath.packages.eslint_plugin_sc_js.rules.restrict_use_of_process_env.$url().path,
        searchTitle: `${ESLINT_PLUGIN_SC_JS} > restrict-use-of-process-env`,
      },
    },
  },
} as const satisfies HeadingsInfo
