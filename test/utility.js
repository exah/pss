import {
  cursor,
  opacity,
  radius,
  transform,
  transition,
  outline
} from '../src'

import { toStyles, testValue } from './_helpers'

test('cursor', testValue({
  fn: cursor,
  prop: 'cursor',
  cssProp: 'cursor',
  values: [ 'pointer' ]
}))

test('opacity', testValue({
  fn: opacity,
  prop: 'opacity',
  cssProp: 'opacity',
  values: [ 0.5 ],
  trueValue: 1,
  falseValue: 0
}))

test('radius', testValue({
  fn: radius,
  prop: 'radius',
  cssProp: 'borderRadius',
  values: [ '9999px' ]
}))

test('transform', testValue({
  fn: transform,
  prop: 'transform',
  cssProp: 'transform',
  values: [ 'scale(2)' ]
}))

test('transition', testValue({
  fn: transition,
  prop: 'transition',
  cssProp: 'transition',
  values: [ 'any', 'none' ]
}))

test('outline', testValue({
  fn: outline,
  prop: 'outline',
  cssProp: 'outline',
  values: [ '1px solid red', 'none' ]
}))

test('outline: debug', () => {
  expect(toStyles(outline({ outline: 'debug' })).outline.indexOf('1px solid')).toBe(0)
})
