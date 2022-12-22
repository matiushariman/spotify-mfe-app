/* eslint-disable */
export default {
  displayName: 'shortcut',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/shortcut',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  collectCoverage: true,
  collectCoverageFrom: [
    './src/app/**',
    '!./src/**/index.{ts|js}',
    '!./src/app/**/*.{spec|test}.{ts|tsx|js}.*',
  ],
  coverageReporters: ['json', ['text', { skipFull: true }]],
};
