import test from 'ava'
import { float } from '../src'
import { toStyles, testValue, theme, wrapInMedia } from './_helpers'

test('float', testValue({
  fn: float,
  prop: 'float',
  cssProp: 'float',
  values: [ 'left', 'right', 'none' ]
}))

test('clear', testValue({
  fn: float,
  prop: 'clear',
  cssProp: 'clear',
  values: [ 'left', 'right', 'none', 'both' ],
  trueValue: 'both',
  falseValue: 'none'
}))

test('clearFix', t => {
  const clearFixStyle = {
    '&::after': {
      content: '""',
      display: 'block',
      clear: 'both'
    }
  }

  t.deepEqual(toStyles(float({ clearFix: true })), clearFixStyle)
  t.deepEqual(toStyles(float({ clearFix: 'anything' })), {})
  t.deepEqual(toStyles(float({ clearFix: false })), {})
  t.deepEqual(toStyles(float({ clearFix: null })), {})
  t.deepEqual(toStyles(float({ theme, clearFix: { M: true } })), wrapInMedia(clearFixStyle))
})
