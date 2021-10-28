/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ["<rootDir>/jestSetup.ts"],
  setupFilesAfterEnv: ["<rootDir>/JestAfterSetup.ts"]
};