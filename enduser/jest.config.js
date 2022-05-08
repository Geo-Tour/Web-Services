module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    './**/*.{js,jsx,ts,tsx}',
    '!./node_modules/**',
    '!./__test__/**',
    '!./.next/**',
    '!./**/*.config.js',
    '!./**/*.d.ts',
    '!./coverage/**',
    '!./public/**',
    '!./style/**',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '^.+\\.(css|scss)$': '<rootDir>/__test__/mock/styleMock.js',
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__test__/mock/fileMock.js',
  },
  setupFiles: [
    '<rootDir>/__test__/setup.js',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/__test__/setupAfterEnv.js',
  ],
  testMatch: [
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  testPathIgnorePatterns: [
    '/.next/',
    '/node_modules/',
    '/tests/',
    '/coverage/'
  ],
  transform: {
    '^.+\\.(ts|tsx)?$': 'babel-jest',
    '^.+\\\\.jsx?$': 'babel-jest',
  },
  coverageReporters: ['text', 'cobertura'],
};