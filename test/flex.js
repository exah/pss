import test from 'ava'
import { flex } from '../src'
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

test('flexWrap', t => {
  const result1 = toStyles(flex({ flexWrap: true }))
  const result2 = toStyles(flex({ flexWrap: 'wrap' }))
  const result3 = toStyles(flex({ flexWrap: false }))
  const result4 = toStyles(flex({ flexWrap: 'nowrap' }))
  const result5 = toStyles(flex({ flexWrap: null }))
  const resultMedia1 = toStyles(flex({ theme, flexWrap: { M: 'nowrap' } }))
  const resultMedia2 = toStyles(flex({ theme, flexWrapM: 'nowrap' }))

  const expectedWrap = { flexWrap: 'wrap' }
  const expectedNowrap = { flexWrap: 'nowrap' }

  t.deepEqual(result1, expectedWrap)
  t.deepEqual(result2, expectedWrap)
  t.deepEqual(result3, expectedNowrap)
  t.deepEqual(result4, expectedNowrap)
  t.deepEqual(result5, {})
  t.deepEqual(resultMedia1, mobStyle(expectedNowrap))
  t.deepEqual(resultMedia2, mobStyle(expectedNowrap))
})

test('flexDirection', t => {
  const result1 = toStyles(flex({ flexDirection: 'column' }))
  const result2 = toStyles(flex({ flexDirection: 'row' }))
  const result3 = toStyles(flex({ flexDirection: true }))
  const result4 = toStyles(flex({ flexDirection: false }))
  const result5 = toStyles(flex({ flexDirection: null }))

  const expectedColumn = { flexDirection: 'column' }
  const expectedRow = { flexDirection: 'row' }

  t.deepEqual(result1, expectedColumn)
  t.deepEqual(result2, expectedRow)
  t.deepEqual(result3, {})
  t.deepEqual(result4, {})
  t.deepEqual(result5, {})
})

test('alignItems', t => {
  const result1 = toStyles(flex({ alignItems: 'center' }))
  const result2 = toStyles(flex({ alignItems: true }))
  const result3 = toStyles(flex({ alignItems: false }))
  const result4 = toStyles(flex({ alignItems: null }))

  t.deepEqual(result1, { alignItems: 'center' })
  t.deepEqual(result2, {})
  t.deepEqual(result3, {})
  t.deepEqual(result4, {})
})

test('justifyContent', t => {
  const result1 = toStyles(flex({ justifyContent: true }))
  const result2 = toStyles(flex({ justifyContent: 'space-between' }))
  const result3 = toStyles(flex({ justifyContent: false }))
  const result4 = toStyles(flex({ justifyContent: 'normal' }))
  const result5 = toStyles(flex({ justifyContent: null }))
  const resultMedia1 = toStyles(flex({ theme, justifyContent: { M: 'normal' } }))
  const resultMedia2 = toStyles(flex({ theme, justifyContentM: 'normal' }))

  const expectedSpace = { justifyContent: 'space-between' }
  const expectedNormal = { justifyContent: 'normal' }

  t.deepEqual(result1, expectedSpace)
  t.deepEqual(result2, expectedSpace)
  t.deepEqual(result3, expectedNormal)
  t.deepEqual(result4, expectedNormal)
  t.deepEqual(result5, {})
  t.deepEqual(resultMedia1, mobStyle(expectedNormal))
  t.deepEqual(resultMedia2, mobStyle(expectedNormal))
})

test('alignContent', t => {
  const result1 = toStyles(flex({ alignContent: true }))
  const result2 = toStyles(flex({ alignContent: 'space-between' }))
  const result3 = toStyles(flex({ alignContent: false }))
  const result4 = toStyles(flex({ alignContent: 'normal' }))
  const result5 = toStyles(flex({ alignContent: null }))
  const resultMedia1 = toStyles(flex({ theme, alignContent: { M: 'normal' } }))
  const resultMedia2 = toStyles(flex({ theme, alignContentM: 'normal' }))

  const expectedSpace = { alignContent: 'space-between' }
  const expectedNormal = { alignContent: 'normal' }

  t.deepEqual(result1, {})
  t.deepEqual(result2, expectedSpace)
  t.deepEqual(result3, {})
  t.deepEqual(result4, expectedNormal)
  t.deepEqual(result5, {})
  t.deepEqual(resultMedia1, mobStyle(expectedNormal))
  t.deepEqual(resultMedia2, mobStyle(expectedNormal))
})
