module.exports = {
  name: 'grid',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/grid',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
