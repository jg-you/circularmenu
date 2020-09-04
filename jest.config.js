// jest.config.js
module.exports = {
  collectCoverageFrom: [
    'circularMenu/**/*.js',
    '!<rootDir>/**/*.test.js',
    '!<rootDir>/**/*.scss',
    '!<rootDir>/**/*.html',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  moduleDirectories: ['node_modules', 'circleMenu'],
  moduleNameMapper: {
    '.*\\.(css|scss)$': '<rootDir>/__mocks__/SCSSStub.js',
    '\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    '<rootDir>/config/assetsTransformer.js',
  },
  testPathIgnorePatterns: [
    '<rootDir>config',
    '<rootDir>server',
    '<rootDir>webpack',
  ],
  testRegex: 'tests/.*\\.test\\.js$',
};
