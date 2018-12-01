import test from 'ava'
import { flexItem } from '../src'
import { toStyles, testValue } from './_helpers'

test('flex', testValue({
  fn: flexItem,
  prop: 'flex',
  cssProp: 'flex',
  values: [ 1, 0, '0', '100', 'auto' ],
  trueValue: '1 1 0',
  falseValue: '0 1 auto'
}))

test('grow', testValue({
  fn: flexItem,
  prop: 'grow',
  cssProp: 'flexGrow',
  values: [ 1, 0, 100 ],
  trueValue: 1,
  falseValue: 0
}))

test('shrink', testValue({
  fn: flexItem,
  prop: 'shrink',
  cssProp: 'flexShrink',
  values: [ 1, 0, 100 ],
  trueValue: 1,
  falseValue: 0
}))

test('order', testValue({
  fn: flexItem,
  prop: 'order',
  cssProp: 'order',
  values: [ 1, 0, 100 ],
  trueValue: 1,
  falseValue: 0
}))

test('alignSelf', testValue({
  fn: flexItem,
  prop: 'alignSelf',
  cssProp: 'alignSelf',
  values: [ 'center', 'flex-start', 'flex-end' ]
}))

const theme = {
  media: {
    M: '(max-width: 600px)'
  },
  size: {
    card: {
      default: 200,
      'M': 100
    }
  }
}

const mobStyle = (style) => ({ [`@media ${theme.media.M}`]: style })

test('basis', t => {
  t.deepEqual(toStyles(flexItem({ basis: true })), { flexBasis: 'auto' })
  t.deepEqual(toStyles(flexItem({ basis: 1 })), { flexBasis: '100%' })
  t.deepEqual(toStyles(flexItem({ basis: false })), {})
  t.deepEqual(toStyles(flexItem({ basis: '0' })), { flexBasis: '0' })
  t.deepEqual(toStyles(flexItem({ basis: null })), {})
  t.deepEqual(toStyles(flexItem({ theme, basis: { M: '0' } })), mobStyle({ flexBasis: '0' }))
})
