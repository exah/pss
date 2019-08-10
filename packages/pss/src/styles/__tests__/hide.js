import { hide } from '../..'
import { theme, toStyles } from '../../../test-helpers'

test('hide', () => {
  expect(toStyles(hide({ theme, hide: { M: true } }))).toEqual({ '@media (max-width: 600px)': { display: 'none' } })
  expect(toStyles(hide({ theme, hide: 'M' }))).toEqual({ '@media (max-width: 600px)': { display: 'none' } })
  expect(toStyles(hide({ theme, hide: { M: false } }))).toEqual({})
  expect(toStyles(hide({ theme, hide: true }))).toEqual({ display: 'none' })
})
