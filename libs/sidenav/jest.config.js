module.exports = {
  name: 'sidenav',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/sidenav',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
