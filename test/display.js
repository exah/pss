import { display } from '../src'
import { theme, testValue, toStyles } from './_helpers'

test('display', testValue({
  fn: display,
  prop: 'display',
  cssProp: 'display',
  values: [ 'block', 'flex', 'grid' ],
  trueValue: 'initial',
  falseValue: 'none'
}))

test('hideOn', () => {
  expect(toStyles(display({ theme, hideOn: { M: true } }))).toEqual({ '@media (max-width: 600px)': { display: 'none' } })
  expect(toStyles(display({ theme, hideOn: 'M' }))).toEqual({ '@media (max-width: 600px)': { display: 'none' } })
  expect(toStyles(display({ theme, hideOn: { M: false } }))).toEqual({})
  expect(toStyles(display({ theme, hideOn: true }))).toEqual({ display: 'none' })
})
