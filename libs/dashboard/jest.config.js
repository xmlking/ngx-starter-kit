module.exports = {
  name: 'dashboard',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/dashboard',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
