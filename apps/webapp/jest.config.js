module.exports = {
  name: 'webapp',
  preset: '../../jest.config.js',
  testPathIgnorePatterns: ['/e2e/'],
  coverageDirectory: '../../coverage/apps/webapp',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
