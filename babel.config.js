module.exports = {
  'env': {
    'modules': {
      'plugins': [
        '@babel/plugin-transform-modules-commonjs'
      ]
    }
  },
  'presets': [
    '@babel/preset-flow',
    [ '@babel/preset-env', { 'modules': false } ]
  ],
  'plugins': [
    [ '@babel/plugin-proposal-object-rest-spread', { 'useBuiltIns': true } ]
  ]
}
