module.exports = {
  name: 'led',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/led',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
