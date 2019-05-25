module.exports = {
  name: 'shared',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/shared',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
