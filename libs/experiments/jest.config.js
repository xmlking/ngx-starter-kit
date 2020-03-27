module.exports = {
  name: 'experiments',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/experiments',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
