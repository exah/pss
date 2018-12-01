import test from 'ava'
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
    {}
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