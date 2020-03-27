module.exports = {
  name: 'app-confirm',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/app-confirm',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
