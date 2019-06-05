module.exports = {
  name: 'tree',
  preset: '../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../coverage/libs/tree',

  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: 'TS151001'
      }
    }
  }
};
