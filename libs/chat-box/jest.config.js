module.exports = {
  name: 'chat-box',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/chat-box',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
