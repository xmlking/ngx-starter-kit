module.exports = {
  name: 'svg-viewer',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/svg-viewer',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
