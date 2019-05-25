module.exports = {
  name: 'scrollbar',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/scrollbar',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
