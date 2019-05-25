module.exports = {
  name: 'image-comparison',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/image-comparison',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
