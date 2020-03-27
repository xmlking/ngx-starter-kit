module.exports = {
  name: 'scrollbar',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/scrollbar',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
