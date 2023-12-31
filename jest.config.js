module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts, tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: { ' .+\\.ts$': 'ts-jest' },
  preset: 'ts-jest',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
}
