module.exports = {
  name: 'socketio-plugin',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/socketio-plugin',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
