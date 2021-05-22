module.exports = {
  name: 'webapp',
  preset: '../../jest.config.js',
  testPathIgnorePatterns: ['/e2e/'],
  coverageDirectory: '../../coverage/apps/webapp',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
