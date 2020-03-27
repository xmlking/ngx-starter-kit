module.exports = {
  name: 'toolbar',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/toolbar',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
