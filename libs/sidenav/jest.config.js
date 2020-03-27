module.exports = {
  name: 'sidenav',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/sidenav',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
