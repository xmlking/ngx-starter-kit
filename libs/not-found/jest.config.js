module.exports = {
  name: 'not-found',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/not-found',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
