module.exports = {
  roots: ['src'],
  clearMocks: true,
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  // testPathIgnorePatterns: ['dist/', 'lib/', 'example/', 'node_modules/'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es/.*)'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  moduleNameMapper: {
    // Mocks out all these file formats when tests are run.
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'identity-obj-proxy',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  preset: 'ts-jest/presets/js-with-ts',
};
