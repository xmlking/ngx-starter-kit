module.exports = {
  name: 'chat-box',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/chat-box',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
