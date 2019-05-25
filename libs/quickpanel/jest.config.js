module.exports = {
  name: 'quickpanel',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/quickpanel',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
