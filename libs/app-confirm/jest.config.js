module.exports = {
  name: 'app-confirm',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/app-confirm',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
