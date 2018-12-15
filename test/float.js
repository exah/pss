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

test('clearFix', () => {
  const clearFixStyle = {
    '&::after': {
      content: '""',
      display: 'block',
      clear: 'both'
    }
  }

  expect(toStyles(float({ clearFix: true }))).toEqual(clearFixStyle)
  expect(toStyles(float({ clearFix: 'anything' }))).toEqual({})
  expect(toStyles(float({ clearFix: false }))).toEqual({})
  expect(toStyles(float({ clearFix: null }))).toEqual({})
  expect(toStyles(float({ theme, clearFix: { M: true } }))).toEqual(wrapInMedia(clearFixStyle))
})
