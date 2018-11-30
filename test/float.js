import test from 'ava'
import { float } from '../src'
import { toStyles } from './_helpers'

const theme = {
  media: {
    M: '(max-width: 600px)'
  }
}

const mobStyle = (style) => ({ [`@media ${theme.media.M}`]: style })

test('float', t => {
  const result1 = toStyles(float({ float: true }))
  const result2 = toStyles(float({ float: 'left' }))
  const result3 = toStyles(float({ float: false }))
  const result4 = toStyles(float({ float: 'right' }))
  const result5 = toStyles(float({ float: null }))
  const resultMedia1 = toStyles(float({ theme, float: { M: 'right' } }))
  const resultMedia2 = toStyles(float({ theme, floatM: 'right' }))

  const expectedLeft = { float: 'left' }
  const expectedRight = { float: 'right' }

  t.deepEqual(result1, {})
  t.deepEqual(result2, expectedLeft)
  t.deepEqual(result3, {})
  t.deepEqual(result4, expectedRight)
  t.deepEqual(result5, {})
  t.deepEqual(resultMedia1, mobStyle(expectedRight))
  t.deepEqual(resultMedia2, mobStyle(expectedRight))
})

test('clear', t => {
  const result1 = toStyles(float({ clear: true }))
  const result2 = toStyles(float({ clear: 'left' }))
  const result3 = toStyles(float({ clear: false }))
  const result4 = toStyles(float({ clear: 'right' }))
  const result5 = toStyles(float({ clear: null }))
  const resultMedia1 = toStyles(float({ theme, clear: { M: 'right' } }))
  const resultMedia2 = toStyles(float({ theme, clearM: 'right' }))

  const expectedLeft = { clear: 'left' }
  const expectedRight = { clear: 'right' }

  t.deepEqual(result1, { clear: 'both' })
  t.deepEqual(result2, expectedLeft)
  t.deepEqual(result3, { clear: 'none' })
  t.deepEqual(result4, expectedRight)
  t.deepEqual(result5, {})
  t.deepEqual(resultMedia1, mobStyle(expectedRight))
  t.deepEqual(resultMedia2, mobStyle(expectedRight))
})

test('clearFix', t => {
  const result1 = toStyles(float({ clearFix: true }))
  const result2 = toStyles(float({ clearFix: 'anything' }))
  const result3 = toStyles(float({ clearFix: false }))
  const result4 = toStyles(float({ clearFix: null }))
  const resultMedia1 = toStyles(float({ theme, clearFix: { M: true } }))
  const resultMedia2 = toStyles(float({ theme, clearFixM: true }))

  const expected = {
    '&::after': {
      content: '""',
      display: 'block',
      clear: 'both'
    }
  }

  t.deepEqual(result1, expected)
  t.deepEqual(result2, {})
  t.deepEqual(result3, {})
  t.deepEqual(result4, {})
  t.deepEqual(resultMedia1, mobStyle(expected))
  t.deepEqual(resultMedia2, mobStyle(expected))
})
