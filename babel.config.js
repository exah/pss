const IS_TEST = process.env.NODE_ENV === 'test'
const IS_ESM = !IS_TEST && process.env.MODULES !== 'cjs'

module.exports = {
  'ignore': IS_TEST ? [] : [ '**/__tests__/*.js' ],
  'presets': [
    [
      '@babel/preset-env', {
        modules: IS_ESM ? false : 'commonjs',
        loose: true
      }
    ]
  ],
  'plugins': [
    [ '@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true, loose: true } ]
  ]
}
