module.exports = {
  name: 'svg-viewer',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/svg-viewer',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
