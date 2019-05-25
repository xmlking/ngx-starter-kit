module.exports = {
  name: 'experiments',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/experiments',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
