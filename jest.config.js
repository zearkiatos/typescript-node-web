/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverageFrom: ["src/**/*.ts", "!**/node_modules/**", "src/**/*.js"],
    coverageThreshold: {
      global: {
        statements: 60,
        branches: 100,
        lines: 60,
        functions: 100,
      },
    },
  };