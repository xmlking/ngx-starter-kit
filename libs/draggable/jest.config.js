module.exports = {
  name: 'draggable',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/draggable',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
