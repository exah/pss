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
  const result1 = toStyles(flexItem({ basis: true }))
  const result2 = toStyles(flexItem({ basis: 1 }))
  const result3 = toStyles(flexItem({ basis: false }))
  const result4 = toStyles(flexItem({ basis: '0' }))
  const result5 = toStyles(flexItem({ basis: null }))
  const resultMedia1 = toStyles(flexItem({ theme, basis: { M: '0' } }))
  const resultMedia2 = toStyles(flexItem({ theme, basisM: '0' }))

  t.deepEqual(result1, { flexBasis: 'auto' })
  t.deepEqual(result2, { flexBasis: '100%' })
  t.deepEqual(result3, {})
  t.deepEqual(result4, { flexBasis: '0' })
  t.deepEqual(result5, {})
  t.deepEqual(resultMedia1, mobStyle({ flexBasis: '0' }))
  t.deepEqual(resultMedia2, mobStyle({ flexBasis: '0' }))
})
