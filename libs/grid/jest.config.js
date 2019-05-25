module.exports = {
  name: 'grid',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/grid',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
