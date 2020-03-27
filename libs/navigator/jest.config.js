module.exports = {
  name: 'navigator',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/navigator',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
