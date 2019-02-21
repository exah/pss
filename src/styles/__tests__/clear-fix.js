import { clearFix } from '../..'
import { toStyles, theme, wrapInMedia } from '../../../test-helpers'

test('clearFix', () => {
  const clearFixStyle = {
    '&::after': {
      content: '""',
      display: 'block',
      clear: 'both'
    }
  }

  expect(toStyles(clearFix({ clearFix: true }))).toEqual(clearFixStyle)
  expect(toStyles(clearFix({ clearFix: 'anything' }))).toEqual({})
  expect(toStyles(clearFix({ clearFix: false }))).toEqual({})
  expect(toStyles(clearFix({ clearFix: null }))).toEqual({})
  expect(toStyles(clearFix({ theme, clearFix: { M: true } }))).toEqual(wrapInMedia(clearFixStyle))
})
