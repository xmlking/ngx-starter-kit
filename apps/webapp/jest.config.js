module.exports = {
  name: 'webapp',
  preset: '../../jest.config.js',
  testPathIgnorePatterns: ['/e2e/'],
  coverageDirectory: '../../coverage/apps/webapp',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
