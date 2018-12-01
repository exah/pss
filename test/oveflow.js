import test from 'ava'
import { overflow } from '../src'
import { toStyles, theme, wrapInMedia, testValue } from './_helpers'

test('ov', testValue({
  fn: overflow,
  prop: 'ov',
  cssProp: 'overflow',
  values: [ 'hidden', 'auto' ],
  trueValue: 'auto',
  falseValue: 'visible'
}))

test('ovy', testValue({
  fn: overflow,
  prop: 'ovy',
  cssProp: 'overflowY',
  values: [ 'hidden', 'auto' ],
  trueValue: 'auto',
  falseValue: 'visible'
}))

test('ovx', testValue({
  fn: overflow,
  prop: 'ovx',
  cssProp: 'overflowX',
  values: [ 'hidden', 'auto' ],
  trueValue: 'auto',
  falseValue: 'visible'
}))

const testStyle = (prop, style) => t => {
  t.deepEqual(toStyles(overflow({ [prop]: true })), style)
  t.deepEqual(toStyles(overflow({ [prop]: 'anything' })), {})
  t.deepEqual(toStyles(overflow({ [prop]: false })), {})
  t.deepEqual(toStyles(overflow({ [prop]: null })), {})
  t.deepEqual(toStyles(overflow({ theme, [prop]: { M: true } })), wrapInMedia(style))
}

test('ovh', testStyle('ovh', { overflow: 'hidden' }))
test('ovsx', testStyle('ovsx', { overflowX: 'auto', overflowY: 'hidden' }))
test('ovsy', testStyle('ovsy', { overflowX: 'hidden', overflowY: 'auto' }))
test('ovtouch', testStyle('ovtouch', { 'WebkitOverflowScrolling': 'touch' }))
