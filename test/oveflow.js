import test from 'ava'
import { overflow } from '../src'
import { toStyles, theme, wrapInMedia } from './_helpers'

const testProp = (prop, cssProp) => (t) => {
  const result1 = toStyles(overflow({ [prop]: true }))
  const result2 = toStyles(overflow({ [prop]: 'hidden' }))
  const result3 = toStyles(overflow({ [prop]: false }))
  const result4 = toStyles(overflow({ [prop]: 'auto' }))
  const result5 = toStyles(overflow({ [prop]: null }))
  const resultMedia1 = toStyles(overflow({ theme, [prop]: { M: 'auto' } }))
  const resultMedia2 = toStyles(overflow({ theme, [prop + 'M']: 'auto' }))

  const expectedAuto = { [cssProp]: 'auto' }
  const expectedHidden = { [cssProp]: 'hidden' }
  const expectedVisible = { [cssProp]: 'visible' }

  t.deepEqual(result1, expectedAuto)
  t.deepEqual(result2, expectedHidden)
  t.deepEqual(result3, expectedVisible)
  t.deepEqual(result4, expectedAuto)
  t.deepEqual(result5, {})
  t.deepEqual(resultMedia1, wrapInMedia(expectedAuto))
  t.deepEqual(resultMedia2, wrapInMedia(expectedAuto))
}

const testStyle = (prop, style) => t => {
  const result1 = toStyles(overflow({ [prop]: true }))
  const result2 = toStyles(overflow({ [prop]: 'anything' }))
  const result3 = toStyles(overflow({ [prop]: false }))
  const result4 = toStyles(overflow({ [prop]: null }))
  const resultMedia1 = toStyles(overflow({ theme, [prop]: { M: true } }))
  const resultMedia2 = toStyles(overflow({ theme, [prop + 'M']: true }))

  t.deepEqual(result1, style)
  t.deepEqual(result2, {})
  t.deepEqual(result3, {})
  t.deepEqual(result4, {})
  t.deepEqual(resultMedia1, wrapInMedia(style))
  t.deepEqual(resultMedia2, wrapInMedia(style))
}

test('ov', testProp('ov', 'overflow'))
test('ovx', testProp('ovx', 'overflowX'))
test('ovy', testProp('ovy', 'overflowY'))
test('ovh', testStyle('ovh', { overflow: 'hidden' }))
test('ovsx', testStyle('ovsx', { overflowX: 'auto', overflowY: 'hidden' }))
test('ovsy', testStyle('ovsy', { overflowX: 'hidden', overflowY: 'auto' }))
test('ovtouch', testStyle('ovtouch', { 'WebkitOverflowScrolling': 'touch' }))
