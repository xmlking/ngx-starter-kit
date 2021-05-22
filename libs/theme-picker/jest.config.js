module.exports = {
  name: 'theme-picker',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/theme-picker',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
