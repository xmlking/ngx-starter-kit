module.exports = {
  name: 'socketio-plugin',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/socketio-plugin',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
