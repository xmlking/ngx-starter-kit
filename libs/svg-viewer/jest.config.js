module.exports = {
  name: 'svg-viewer',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/svg-viewer',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
