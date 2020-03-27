module.exports = {
  name: 'notifications',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/notifications',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
