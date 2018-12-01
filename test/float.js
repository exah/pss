import test from 'ava'
import { float } from '../src'
import { toStyles, testAnyValue, testBoolValue, theme, mediaStyle } from './_helpers'

test('float', testAnyValue({
  fn: float,
  prop: 'float',
  cssProp: 'float',
  values: [ 'left', 'right', 'none' ]
}))

test('clear', testBoolValue({
  fn: float,
  prop: 'clear',
  cssProp: 'clear',
  values: [ 'left', 'right', 'none', 'both' ],
  trueValue: 'both',
  falseValue: 'none'
}))

test('clearFix', t => {
  const expected = {
    '&::after': {
      content: '""',
      display: 'block',
      clear: 'both'
    }
  }

  t.deepEqual(toStyles(float({ clearFix: true })), expected)
  t.deepEqual(toStyles(float({ clearFix: 'anything' })), {})
  t.deepEqual(toStyles(float({ clearFix: false })), {})
  t.deepEqual(toStyles(float({ clearFix: null })), {})
  t.deepEqual(toStyles(float({ theme, clearFix: { M: true } })), mediaStyle(expected))
  t.deepEqual(toStyles(float({ theme, clearFixM: true })), mediaStyle(expected))
})
