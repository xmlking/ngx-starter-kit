module.exports = {
  name: 'app-confirm',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/app-confirm',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
