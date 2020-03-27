module.exports = {
  name: 'draggable',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/draggable',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
