module.exports = {
  name: 'breadcrumbs',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/breadcrumbs',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
