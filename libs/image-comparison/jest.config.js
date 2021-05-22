module.exports = {
  name: 'image-comparison',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/image-comparison',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
