module.exports = {
  name: 'admin',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/admin',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
