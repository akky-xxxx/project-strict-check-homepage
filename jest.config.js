module.exports = {
  coveragePathIgnorePatterns: ["/styled-system/"],
  moduleNameMapper: {
    "^@lib/(.+)": "<rootDir>/src/lib/$1",
    "^@panda/(.+)": "<rootDir>/styled-system/$1",
    "^@shared/(.+)": "<rootDir>/src/shared/$1",
  },
  roots: ["<rootDir>/spec", "<rootDir>/src"],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  testEnvironment: "jsdom",
  testMatch: ["**/?(*.)test.(ts|js)?(x)"],
  testTimeout: 20_000,
  transform: {
    "/styled-system/": [
      "@swc/jest",
      {
        sourceMaps: true,

        module: {
          type: "commonjs",
        },
      },
    ],
    "^.+\\.(ts|tsx)$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
        module: {
          type: "commonjs",
        },
        sourceMaps: true,
      },
    ],
  },
}
