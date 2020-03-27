module.exports = {
  name: 'breadcrumbs',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/breadcrumbs',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
