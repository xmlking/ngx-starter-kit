module.exports = {
  name: 'oidc',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/oidc',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
