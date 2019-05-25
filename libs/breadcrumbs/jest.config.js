module.exports = {
  name: 'breadcrumbs',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/breadcrumbs',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
