module.exports = {
  name: 'notifications',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/notifications',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
