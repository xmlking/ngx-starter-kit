module.exports = {
  name: 'auth',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/auth',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
