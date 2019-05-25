module.exports = {
  name: 'led',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/led',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
