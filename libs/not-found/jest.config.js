module.exports = {
  name: 'not-found',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/not-found',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
