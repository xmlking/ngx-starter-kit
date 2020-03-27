module.exports = {
  name: 'clap',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/clap',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
