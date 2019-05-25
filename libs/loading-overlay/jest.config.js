module.exports = {
  name: 'loading-overlay',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/loading-overlay',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
