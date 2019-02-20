import { hideOn } from '../src'
import { theme, toStyles } from './_helpers'

test('hideOn', () => {
  expect(toStyles(hideOn({ theme, hideOn: { M: true } }))).toEqual({ '@media (max-width: 600px)': { display: 'none' } })
  expect(toStyles(hideOn({ theme, hideOn: 'M' }))).toEqual({ '@media (max-width: 600px)': { display: 'none' } })
  expect(toStyles(hideOn({ theme, hideOn: { M: false } }))).toEqual({})
  expect(toStyles(hideOn({ theme, hideOn: true }))).toEqual({ display: 'none' })
})
