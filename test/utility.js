import { utility } from '../src'
import { toStyles, testValue } from './_helpers'

test('cursor', testValue({
  fn: utility,
  prop: 'cursor',
  cssProp: 'cursor',
  values: [ 'pointer' ]
}))

test('opacity', testValue({
  fn: utility,
  prop: 'opacity',
  cssProp: 'opacity',
  values: [ 0.5 ],
  trueValue: 1,
  falseValue: 0
}))

test('radius', testValue({
  fn: utility,
  prop: 'radius',
  cssProp: 'borderRadius',
  values: [ '9999px' ]
}))

test('transform', testValue({
  fn: utility,
  prop: 'transform',
  cssProp: 'transform',
  values: [ 'scale(2)' ]
}))

test('transition', testValue({
  fn: utility,
  prop: 'transition',
  cssProp: 'transition',
  values: [ 'any', 'none' ]
}))

test('outline', testValue({
  fn: utility,
  prop: 'outline',
  cssProp: 'outline',
  values: [ '1px solid red', 'none' ]
}))

test('outline: debug', () => {
  expect(toStyles(utility({ outline: 'debug' })).outline.indexOf('1px solid')).toBe(0)
})
