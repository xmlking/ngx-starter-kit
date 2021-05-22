module.exports = {
  name: 'widgets',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/widgets',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
