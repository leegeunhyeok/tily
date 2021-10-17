module.exports = {
  setupFilesAfterEnv: ['./tests/setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    "^~(.*)$": "<rootDir>/src$1",
    "^tests(.*)$": "<rootDir>/tests$1",
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*', '!src/**/*.json'],
};
