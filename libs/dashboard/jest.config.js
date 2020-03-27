module.exports = {
  name: 'dashboard',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/dashboard',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
