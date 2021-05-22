module.exports = {
  name: 'json-diff',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/json-diff',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
