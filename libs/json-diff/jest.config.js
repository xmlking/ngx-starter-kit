module.exports = {
  name: 'json-diff',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/json-diff',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
