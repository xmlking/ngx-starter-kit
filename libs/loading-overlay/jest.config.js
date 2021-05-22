module.exports = {
  name: 'loading-overlay',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/loading-overlay',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
