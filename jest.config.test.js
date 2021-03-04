module.exports = {
  clearMocks: false,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testPathIgnorePatterns: ['./node_modules/', './build/', './serverless/'],
  testMatch: ['<rootDir>/__tests__/*.ts'],
  testEnvironment: "node",
};