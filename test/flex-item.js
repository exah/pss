import test from 'ava'
import { flexItem } from '../src'
import { toStyles } from './_helpers'

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

test('flex', t => {
  const result1 = toStyles(flexItem({ flex: true }))
  const result2 = toStyles(flexItem({ flex: 1 }))
  const result3 = toStyles(flexItem({ flex: false }))
  const result4 = toStyles(flexItem({ flex: '0' }))
  const result5 = toStyles(flexItem({ flex: null }))
  const resultMedia1 = toStyles(flexItem({ theme, flex: { M: '0' } }))
  const resultMedia2 = toStyles(flexItem({ theme, flexM: '0' }))

  t.deepEqual(result1, { flex: '1 1 0' })
  t.deepEqual(result2, { flex: 1 })
  t.deepEqual(result3, { flex: '0 1 auto' })
  t.deepEqual(result4, { flex: '0' })
  t.deepEqual(result5, { flex: null }) // should be empty object
  t.deepEqual(resultMedia1, mobStyle({ flex: '0' }))
  t.deepEqual(resultMedia2, mobStyle({ flex: '0' }))
})

test('grow', t => {
  const result1 = toStyles(flexItem({ grow: true }))
  const result2 = toStyles(flexItem({ grow: 1 }))
  const result3 = toStyles(flexItem({ grow: false }))
  const result4 = toStyles(flexItem({ grow: '0' }))
  const result5 = toStyles(flexItem({ grow: null }))
  const resultMedia1 = toStyles(flexItem({ theme, grow: { M: '0' } }))
  const resultMedia2 = toStyles(flexItem({ theme, growM: '0' }))

  t.deepEqual(result1, { flexGrow: 1 })
  t.deepEqual(result2, { flexGrow: 1 })
  t.deepEqual(result3, { flexGrow: 0 })
  t.deepEqual(result4, { flexGrow: '0' })
  t.deepEqual(result5, { flexGrow: null }) // should be empty object
  t.deepEqual(resultMedia1, mobStyle({ flexGrow: '0' }))
  t.deepEqual(resultMedia2, mobStyle({ flexGrow: '0' }))
})

test('shrink', t => {
  const result1 = toStyles(flexItem({ shrink: true }))
  const result2 = toStyles(flexItem({ shrink: 1 }))
  const result3 = toStyles(flexItem({ shrink: false }))
  const result4 = toStyles(flexItem({ shrink: '0' }))
  const result5 = toStyles(flexItem({ shrink: null }))
  const resultMedia1 = toStyles(flexItem({ theme, shrink: { M: '0' } }))
  const resultMedia2 = toStyles(flexItem({ theme, shrinkM: '0' }))

  t.deepEqual(result1, { flexShrink: 1 })
  t.deepEqual(result2, { flexShrink: 1 })
  t.deepEqual(result3, { flexShrink: 0 })
  t.deepEqual(result4, { flexShrink: '0' })
  t.deepEqual(result5, { flexShrink: null }) // should be empty object
  t.deepEqual(resultMedia1, mobStyle({ flexShrink: '0' }))
  t.deepEqual(resultMedia2, mobStyle({ flexShrink: '0' }))
})

test('order', t => {
  const result1 = toStyles(flexItem({ order: true }))
  const result2 = toStyles(flexItem({ order: 1 }))
  const result3 = toStyles(flexItem({ order: false }))
  const result4 = toStyles(flexItem({ order: '0' }))
  const result5 = toStyles(flexItem({ order: null }))
  const resultMedia1 = toStyles(flexItem({ theme, order: { M: '0' } }))
  const resultMedia2 = toStyles(flexItem({ theme, orderM: '0' }))

  t.deepEqual(result1, { order: 1 })
  t.deepEqual(result2, { order: 1 })
  t.deepEqual(result3, { order: 0 })
  t.deepEqual(result4, { order: '0' })
  t.deepEqual(result5, { order: null }) // should be empty object
  t.deepEqual(resultMedia1, mobStyle({ order: '0' }))
  t.deepEqual(resultMedia2, mobStyle({ order: '0' }))
})

test('alignSelf', t => {
  const result1 = toStyles(flexItem({ alignSelf: true }))
  const result2 = toStyles(flexItem({ alignSelf: 'space-between' }))
  const result3 = toStyles(flexItem({ alignSelf: false }))
  const result4 = toStyles(flexItem({ alignSelf: 'normal' }))
  const result5 = toStyles(flexItem({ alignSelf: null }))
  const resultMedia1 = toStyles(flexItem({ theme, alignSelf: { M: 'normal' } }))
  const resultMedia2 = toStyles(flexItem({ theme, alignSelfM: 'normal' }))

  const expectedSpace = { alignSelf: 'space-between' }
  const expectedNormal = { alignSelf: 'normal' }
  const expectedUndefined = { alignSelf: undefined }

  t.deepEqual(result1, expectedUndefined)
  t.deepEqual(result2, expectedSpace)
  t.deepEqual(result3, expectedUndefined)
  t.deepEqual(result4, expectedNormal)
  t.deepEqual(result5, { alignSelf: null }) // should be empty object
  t.deepEqual(resultMedia1, mobStyle(expectedNormal))
  t.deepEqual(resultMedia2, mobStyle(expectedNormal))
})

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
  t.deepEqual(result3, { flexBasis: 0 })
  t.deepEqual(result4, { flexBasis: '0' })
  t.deepEqual(result5, {})
  t.deepEqual(resultMedia1, mobStyle({ flexBasis: '0' }))
  t.deepEqual(resultMedia2, mobStyle({ flexBasis: '0' }))
})
