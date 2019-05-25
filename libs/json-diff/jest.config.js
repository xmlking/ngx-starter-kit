module.exports = {
  name: 'json-diff',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/json-diff',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
