import test from 'ava'
import { flexItem } from '../src'
import { toStyles, testValue } from './_helpers'

test('flex', testValue({
  fn: flexItem,
  prop: 'flex',
  cssProp: 'flex',
  values: [ '1', '1 1', 0, '0', '100', '100px', 'auto' ],
  trueValue: '1 1 0',
  falseValue: '0 1 auto'
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
    site: 1000,
    card: {
      default: 200,
      'M': 100
    }
  }
}

const mobStyle = (style) => ({ [`@media ${theme.media.M}`]: style })

test('flex (basis)', t => {
  t.deepEqual(toStyles(flexItem({ flex: 1 })), { flex: '100%' })
  t.deepEqual(toStyles(flexItem({ flex: (1 / 2) })), { flex: '50%' })
  t.deepEqual(toStyles(flexItem({ flex: 10 })), { flex: '10px' })
  t.deepEqual(toStyles(flexItem({ flex: null })), {})
  t.deepEqual(toStyles(flexItem({ theme, flex: 'site' })), { flex: '1000px' })
  t.deepEqual(toStyles(flexItem({ theme, flex: { M: '0' } })), mobStyle({ flex: '0' }))
})
