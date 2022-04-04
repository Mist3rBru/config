module.exports = {
  bail: true,
  roots: ['<rootDir>/__tests__'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/main/**',
    '!src/**/index.ts'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/tests/(.*)': '<rootDir>/__tests__/$1',
    '@/(.*)': '<rootDir>/src/$1'
  },
  preset: '@shelf/jest-mongodb',
  testPathIgnorePatterns: ['mock*']
}
