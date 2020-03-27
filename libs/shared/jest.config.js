module.exports = {
  name: 'shared',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/shared',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
