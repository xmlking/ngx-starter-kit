module.exports = {
  name: 'socketio-plugin',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/socketio-plugin',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
