module.exports = {
  name: 'toolbar',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/toolbar',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
