module.exports = {
  name: 'quickpanel',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/quickpanel',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
