module.exports = {
  name: 'context-menu',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/context-menu',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
