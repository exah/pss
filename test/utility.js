import test from 'ava'
import { utility } from '../src'
import { toStyles, testAnyValue, testBoolValue } from './_helpers'

test('cursor', testAnyValue({
  fn: utility,
  prop: 'cursor',
  cssProp: 'cursor',
  values: [ 'pointer' ]
}))

test('opacity', testBoolValue({
  fn: utility,
  prop: 'opacity',
  cssProp: 'opacity',
  values: [ 0.5 ],
  trueValue: 1,
  falseValue: 0
}))

test('radius', testAnyValue({
  fn: utility,
  prop: 'radius',
  cssProp: 'borderRadius',
  values: [ '9999px' ]
}))

test('transform', testAnyValue({
  fn: utility,
  prop: 'transform',
  cssProp: 'transform',
  values: [ 'scale(2)' ]
}))

test('transition', testBoolValue({
  fn: utility,
  prop: 'transition',
  cssProp: 'transition',
  values: [ 'any' ],
  trueValue: 'all .3s',
  falseValue: 'none'
}))

test('outline', t => {
  t.deepEqual(
    toStyles(utility({ outline: '1px solid red' })),
    { outline: '1px solid red' }
  )

  t.deepEqual(
    toStyles(utility({ outline: null })),
    {}
  )

  t.deepEqual(
    toStyles(utility({ outline: true })),
    { outline: 'unset' }
  )

  t.deepEqual(
    toStyles(utility({ outline: false })),
    { outline: 'unset' }
  )

  t.is(
    toStyles(utility({ outline: 'debug' })).outline.indexOf('1px solid'),
    0
  )
})
