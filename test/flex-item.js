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
      all: 200,
      M: 100
    }
  }
}

const mobStyle = (style) => ({ [`@media ${theme.media.M}`]: style })

test('flex (basis)', () => {
  expect(toStyles(flexItem({ flex: 1 }))).toEqual({ flex: '100%' })
  expect(toStyles(flexItem({ flex: (1 / 2) }))).toEqual({ flex: '50%' })
  expect(toStyles(flexItem({ flex: 10 }))).toEqual({ flex: '10px' })
  expect(toStyles(flexItem({ flex: null }))).toEqual({})
  expect(toStyles(flexItem({ theme, flex: 'site' }))).toEqual({ flex: '1000px' })
  expect(toStyles(flexItem({ theme, flex: { M: '0' } }))).toEqual(mobStyle({ flex: '0' }))
})
