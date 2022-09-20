const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  roots: ['<rootDir>/src'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/*.stories.{js,jsx,ts,tsx}',
  ],
  coverageDirectory: '<rootDir>/jest/coverage',
}

module.exports = createJestConfig(customJestConfig)
