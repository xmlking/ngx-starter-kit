module.exports = {
  name: 'notifications',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/notifications',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
