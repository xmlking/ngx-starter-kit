module.exports = {
  name: 'auth',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/auth',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
