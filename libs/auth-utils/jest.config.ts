/* eslint-disable */
export default {
  displayName: 'auth-utils',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/auth-utils',
  collectCoverage: true,
  collectCoverageFrom: [
    './src/lib/**',
    '!./src/**/index.ts',
    '!./src/lib/**/*.spec.ts.*',
  ],
  coverageReporters: ['json', ['text', { skipFull: true }]],
};
