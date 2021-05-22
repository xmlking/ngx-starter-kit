module.exports = {
  name: 'ngx-utils',
  preset: '../../jest.config.js',
  transformIgnorePatterns: ['node_modules/(?!date-fns)'],
  coverageDirectory: '../../coverage/libs/ngx-utils',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
