module.exports = {
  name: 'widgets',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/widgets',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
