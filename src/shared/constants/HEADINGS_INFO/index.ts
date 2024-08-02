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

export const HEADINGS_INFO = {
  /* eslint-disable sort-keys */
  ESLINT_CONFIG_ALL: {
    HOME: {
      PAGE_TITLE: {
        name: ESLINT_CONFIG_SC_ALL,
        href: `${pagesPath.packages.eslint_config_sc_all.$url().path}#package-name`,
        searchTitle: ESLINT_CONFIG_SC_ALL,
      },
      USAGE: {
        name: "Usage",
        href: `${pagesPath.packages.eslint_config_sc_all.$url().path}#usage`,
        searchTitle: ESLINT_CONFIG_SC_ALL,
      },
      INSTALLATION: {
        name: "Installation",
        href: `${pagesPath.packages.eslint_config_sc_all.$url().path}#installation`,
        searchTitle: ESLINT_CONFIG_SC_ALL,
      },
      SETUP: {
        name: "Setup",
        href: `${pagesPath.packages.eslint_config_sc_all.$url().path}#setup`,
        searchTitle: ESLINT_CONFIG_SC_ALL,
      },
      ARGUMENTS: {
        name: "Arguments",
        href: `${pagesPath.packages.eslint_config_sc_all.$url().path}#arguments`,
        searchTitle: `${ESLINT_CONFIG_SC_ALL} > Setup`,
      },
    },
  },
  ESLINT_CONFIG_JEST: {
    HOME: {
      PAGE_TITLE: {
        name: ESLINT_CONFIG_SC_JEST,
        href: `${pagesPath.packages.eslint_config_sc_jest.$url().path}#package-name`,
        searchTitle: ESLINT_CONFIG_SC_JEST,
      },
      USAGE: {
        name: "Usage",
        href: `${pagesPath.packages.eslint_config_sc_jest.$url().path}#usage`,
        searchTitle: ESLINT_CONFIG_SC_JEST,
      },
      INSTALLATION: {
        name: "Installation",
        href: `${pagesPath.packages.eslint_config_sc_jest.$url().path}#installation`,
        searchTitle: ESLINT_CONFIG_SC_JEST,
      },
      SETUP: {
        name: "Setup",
        href: `${pagesPath.packages.eslint_config_sc_jest.$url().path}#setup`,
        searchTitle: ESLINT_CONFIG_SC_JEST,
      },
      ARGUMENTS: {
        name: "Arguments",
        href: `${pagesPath.packages.eslint_config_sc_jest.$url().path}#arguments`,
        searchTitle: `${ESLINT_CONFIG_SC_JEST} > Setup`,
      },
    },
  },
  ESLINT_CONFIG_JS: {
    HOME: {
      PAGE_TITLE: {
        name: ESLINT_CONFIG_SC_JS,
        href: `${pagesPath.packages.eslint_config_sc_js.$url().path}#package-name`,
        searchTitle: ESLINT_CONFIG_SC_JS,
      },
      USAGE: {
        name: "Usage",
        href: `${pagesPath.packages.eslint_config_sc_js.$url().path}#usage`,
        searchTitle: ESLINT_CONFIG_SC_JS,
      },
      INSTALLATION: {
        name: "Installation",
        href: `${pagesPath.packages.eslint_config_sc_js.$url().path}#installation`,
        searchTitle: ESLINT_CONFIG_SC_JS,
      },
      SETUP: {
        name: "Setup",
        href: `${pagesPath.packages.eslint_config_sc_js.$url().path}#setup`,
        searchTitle: ESLINT_CONFIG_SC_JS,
      },
      ARGUMENTS: {
        name: "Arguments",
        href: `${pagesPath.packages.eslint_config_sc_js.$url().path}#arguments`,
        searchTitle: `${ESLINT_CONFIG_SC_JS} > Setup`,
      },
    },
  },
  ESLINT_CONFIG_NEXT: {
    HOME: {
      PAGE_TITLE: {
        name: ESLINT_CONFIG_SC_NEXT,
        href: `${pagesPath.packages.eslint_config_sc_next.$url().path}#package-name`,
        searchTitle: ESLINT_CONFIG_SC_NEXT,
      },
      USAGE: {
        name: "Usage",
        href: `${pagesPath.packages.eslint_config_sc_next.$url().path}#usage`,
        searchTitle: ESLINT_CONFIG_SC_NEXT,
      },
      INSTALLATION: {
        name: "Installation",
        href: `${pagesPath.packages.eslint_config_sc_next.$url().path}#installation`,
        searchTitle: ESLINT_CONFIG_SC_NEXT,
      },
      SETUP: {
        name: "Setup",
        href: `${pagesPath.packages.eslint_config_sc_next.$url().path}#setup`,
        searchTitle: ESLINT_CONFIG_SC_NEXT,
      },
      ARGUMENTS: {
        name: "Arguments",
        href: `${pagesPath.packages.eslint_config_sc_next.$url().path}#arguments`,
        searchTitle: `${ESLINT_CONFIG_SC_NEXT} > Setup`,
      },
    },
  },
  ESLINT_CONFIG_REACT: {
    HOME: {
      PAGE_TITLE: {
        name: ESLINT_CONFIG_SC_REACT,
        href: `${pagesPath.packages.eslint_config_sc_react.$url().path}#package-name`,
        searchTitle: ESLINT_CONFIG_SC_REACT,
      },
      USAGE: {
        name: "Usage",
        href: `${pagesPath.packages.eslint_config_sc_react.$url().path}#usage`,
        searchTitle: ESLINT_CONFIG_SC_REACT,
      },
      INSTALLATION: {
        name: "Installation",
        href: `${pagesPath.packages.eslint_config_sc_react.$url().path}#installation`,
        searchTitle: ESLINT_CONFIG_SC_REACT,
      },
      SETUP: {
        name: "Setup",
        href: `${pagesPath.packages.eslint_config_sc_react.$url().path}#setup`,
        searchTitle: ESLINT_CONFIG_SC_REACT,
      },
      ARGUMENTS: {
        name: "Arguments",
        href: `${pagesPath.packages.eslint_config_sc_react.$url().path}#arguments`,
        searchTitle: `${ESLINT_CONFIG_SC_REACT} > Setup`,
      },
    },
  },
  ESLINT_CONFIG_STORYBOOK: {
    HOME: {
      PAGE_TITLE: {
        name: ESLINT_CONFIG_SC_STORYBOOK,
        href: `${pagesPath.packages.eslint_config_sc_storybook.$url().path}#package-name`,
        searchTitle: ESLINT_CONFIG_SC_STORYBOOK,
      },
      USAGE: {
        name: "Usage",
        href: `${pagesPath.packages.eslint_config_sc_storybook.$url().path}#usage`,
        searchTitle: ESLINT_CONFIG_SC_STORYBOOK,
      },
      INSTALLATION: {
        name: "Installation",
        href: `${pagesPath.packages.eslint_config_sc_storybook.$url().path}#installation`,
        searchTitle: ESLINT_CONFIG_SC_STORYBOOK,
      },
      SETUP: {
        name: "Setup",
        href: `${pagesPath.packages.eslint_config_sc_storybook.$url().path}#setup`,
        searchTitle: ESLINT_CONFIG_SC_STORYBOOK,
      },
      ARGUMENTS: {
        name: "Arguments",
        href: `${pagesPath.packages.eslint_config_sc_storybook.$url().path}#arguments`,
        searchTitle: `${ESLINT_CONFIG_SC_STORYBOOK} > Setup`,
      },
    },
  },
  ESLINT_CONFIG_TS: {
    HOME: {
      PAGE_TITLE: {
        name: ESLINT_CONFIG_SC_TS,
        href: `${pagesPath.packages.eslint_config_sc_ts.$url().path}#package-name`,
        searchTitle: ESLINT_CONFIG_SC_TS,
      },
      USAGE: {
        name: "Usage",
        href: `${pagesPath.packages.eslint_config_sc_ts.$url().path}#usage`,
        searchTitle: ESLINT_CONFIG_SC_TS,
      },
      INSTALLATION: {
        name: "Installation",
        href: `${pagesPath.packages.eslint_config_sc_ts.$url().path}#installation`,
        searchTitle: ESLINT_CONFIG_SC_TS,
      },
      SETUP: {
        name: "Setup",
        href: `${pagesPath.packages.eslint_config_sc_ts.$url().path}#setup`,
        searchTitle: ESLINT_CONFIG_SC_TS,
      },
      ARGUMENTS: {
        name: "Arguments",
        href: `${pagesPath.packages.eslint_config_sc_ts.$url().path}#arguments`,
        searchTitle: `${ESLINT_CONFIG_SC_TS} > Setup`,
      },
    },
  },
  ESLINT_PLUGIN_SC_JS: {
    HOME: {
      PAGE_TITLE: {
        name: ESLINT_PLUGIN_SC_JS,
        href: `${pagesPath.packages.eslint_plugin_sc_js.$url().path}#package-name`,
        searchTitle: ESLINT_PLUGIN_SC_JS,
      },
      USAGE: {
        name: "Usage",
        href: `${pagesPath.packages.eslint_plugin_sc_js.$url().path}#usage`,
        searchTitle: ESLINT_PLUGIN_SC_JS,
      },
      INSTALLATION: {
        name: "Installation",
        href: `${pagesPath.packages.eslint_plugin_sc_js.$url().path}#installation`,
        searchTitle: ESLINT_PLUGIN_SC_JS,
      },
      SETUP: {
        name: "Setup",
        href: `${pagesPath.packages.eslint_plugin_sc_js.$url().path}#setup`,
        searchTitle: ESLINT_PLUGIN_SC_JS,
      },
      RULES: {
        name: "Rules",
        href: `${pagesPath.packages.eslint_plugin_sc_js.$url().path}#rules`,
        searchTitle: `${ESLINT_PLUGIN_SC_JS} > Rules`,
      },
    },
    RULES: {
      PAGE_TITLE: {
        name: `Rules of ${ESLINT_PLUGIN_SC_JS}`,
        href: `${pagesPath.packages.eslint_plugin_sc_js.rules.$url().path}#rules`,
        searchTitle: ESLINT_PLUGIN_SC_JS,
      },
    },
    FILE_PATH_PATTERNS: {
      PAGE_TITLE: {
        name: "file-path-patterns",
        href: `${pagesPath.packages.eslint_plugin_sc_js.rules.file_path_patterns.$url().path}#rule-name`,
        searchTitle: ESLINT_PLUGIN_SC_JS,
      },
      OPTIONS: {
        name: RULE_OPTIONS,
        href: `${pagesPath.packages.eslint_plugin_sc_js.rules.file_path_patterns.$url().path}#rule-options`,
        searchTitle: `${ESLINT_PLUGIN_SC_JS} > file-path-patterns`,
      },
      ALLOW_PATTERNS: {
        name: "allowPatterns",
        href: `${pagesPath.packages.eslint_plugin_sc_js.rules.file_path_patterns.$url().path}#arrow-patterns`,
        searchTitle: `${ESLINT_PLUGIN_SC_JS} > file-path-patterns > Rule Options`,
      },
    },
    FORBIDDEN_MULTIPLE_NAMED_EXPORTS: {
      PAGE_TITLE: {
        name: "forbidden-multiple-named-exports",
        href: `${pagesPath.packages.eslint_plugin_sc_js.rules.forbidden_multiple_named_exports.$url().path}#rule-name`,
        searchTitle: ESLINT_PLUGIN_SC_JS,
      },
      OPTIONS: {
        name: RULE_OPTIONS,
        href: `${pagesPath.packages.eslint_plugin_sc_js.rules.forbidden_multiple_named_exports.$url().path}#rule-options`,
        searchTitle: `${ESLINT_PLUGIN_SC_JS} > forbidden-multiple-named-exports`,
      },
    },
    INDIVIDUAL_IMPORT: {
      PAGE_TITLE: {
        name: "individual-import",
        href: `${pagesPath.packages.eslint_plugin_sc_js.rules.individual_import.$url().path}#rule-name`,
        searchTitle: ESLINT_PLUGIN_SC_JS,
      },
      OPTIONS: {
        name: RULE_OPTIONS,
        href: `${pagesPath.packages.eslint_plugin_sc_js.rules.individual_import.$url().path}#rule-options`,
        searchTitle: `${ESLINT_PLUGIN_SC_JS} > individual-import`,
      },
      TARGETS: {
        name: "targets",
        href: `${pagesPath.packages.eslint_plugin_sc_js.rules.individual_import.$url().path}#targets`,
        searchTitle: `${ESLINT_PLUGIN_SC_JS} > individual-import > Rule Options`,
      },
    },
    MATCH_NAMES_OF_FILE_AND_EXPORT: {
      PAGE_TITLE: {
        name: "match-names-of-file-and-export",
        href: `${pagesPath.packages.eslint_plugin_sc_js.rules.match_names_of_file_and_export.$url().path}#rule-name`,
        searchTitle: ESLINT_PLUGIN_SC_JS,
      },
      OPTIONS: {
        name: RULE_OPTIONS,
        href: `${pagesPath.packages.eslint_plugin_sc_js.rules.match_names_of_file_and_export.$url().path}#rule-options`,
        searchTitle: `${ESLINT_PLUGIN_SC_JS} > match-names-of-file-and-export`,
      },
      CAPTURES: {
        name: "captures",
        href: `${pagesPath.packages.eslint_plugin_sc_js.rules.match_names_of_file_and_export.$url().path}#captures`,
        searchTitle: `${ESLINT_PLUGIN_SC_JS} > match-names-of-file-and-export > Rule Options`,
      },
    },
    RESTRICT_USE_OF_PROCESS_ENV: {
      PAGE_TITLE: {
        name: "restrict-use-of-process-env",
        href: `${pagesPath.packages.eslint_plugin_sc_js.rules.restrict_use_of_process_env.$url().path}#rule-name`,
        searchTitle: ESLINT_PLUGIN_SC_JS,
      },
      OPTIONS: {
        name: RULE_OPTIONS,
        href: `${pagesPath.packages.eslint_plugin_sc_js.rules.restrict_use_of_process_env.$url().path}#rule-options`,
        searchTitle: `${ESLINT_PLUGIN_SC_JS} > restrict-use-of-process-env`,
      },
    },
  },
} as const satisfies HeadingsInfo
