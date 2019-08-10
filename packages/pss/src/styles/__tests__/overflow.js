import { toStyles } from '../../../test-helpers'
import { overflow } from '../..'

test('default', () => {
  expect(toStyles(overflow({ overflow: 'hidden' }))).toEqual({
    overflow: 'hidden'
  })
})

test('shorthand', () => {
  expect(toStyles(overflow({ overflow: 'hidden auto' }))).toEqual({
    overflowX: 'hidden',
    overflowY: 'auto'
  })
})

test('shorthand touch fix', () => {
  expect(toStyles(overflow({ overflow: 'hidden auto touch' }))).toEqual({
    overflowX: 'hidden',
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch'
  })

  expect(toStyles(overflow({ overflow: 'auto touch' }))).toEqual({
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch'
  })
})

test('not valid values', () => {
  expect(toStyles(overflow({ overflow: null }))).toEqual({})
  expect(toStyles(overflow({ overflow: true }))).toEqual({})
  expect(toStyles(overflow({ overflow: false }))).toEqual({})
})
