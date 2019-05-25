module.exports = {
  name: 'theme-picker',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/theme-picker',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
