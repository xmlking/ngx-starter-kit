module.exports = {
  name: 'context-menu',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/context-menu',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
