module.exports = {
  name: 'ngx-utils',
  preset: '../../jest.config.js',
  transformIgnorePatterns: ['node_modules/(?!date-fns)'],
  coverageDirectory: '../../coverage/libs/ngx-utils',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
