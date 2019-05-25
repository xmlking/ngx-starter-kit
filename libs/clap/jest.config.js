module.exports = {
  name: 'clap',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/clap',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
