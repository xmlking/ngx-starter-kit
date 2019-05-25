module.exports = {
  name: 'admin',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/admin',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
