module.exports = {
  name: 'navigator',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/navigator',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
