const IS_DEV = process.env.NODE_ENV !== 'production'
const IS_TEST = process.env.NODE_ENV === 'test'
const IS_ESM = !IS_TEST && process.env.MODULES !== 'cjs'

module.exports = {
  presets: [
    [
      '@babel/preset-react',
      {
        useBuiltIns: true,
        development: IS_DEV
      }
    ],
    [
      '@babel/preset-env',
      {
        modules: IS_ESM ? false : 'commonjs',
        loose: true,
        useBuiltIns: 'entry',
        corejs: 3
      }
    ]
  ],
  plugins: [
    [ 'emotion', { sourceMap: IS_DEV } ]
  ]
}
