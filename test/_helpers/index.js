import expect from 'expect'
import { toArr, flatten, deepMerge } from '@exah/utils'

const THEME = {
  media: {
    D: '(min-width: 601px)',
    M: '(max-width: 600px)'
  }
}

const toStyles = (styles) => deepMerge(...flatten(toArr(styles)))
const wrapInMedia = (style) => ({ [`@media ${THEME.media.M}`]: style })

const throwConsoleErrors = () => {
  const original = console.error

  console.error = (message) => {
    throw new Error(message)
  }

  const restore = () => {
    console.error = original
  }

  return restore
}

const testValue = ({
  fn,
  prop,
  cssProp,
  theme = THEME,
  values = [],
  trueValue,
  falseValue
}) => () => {
  expect(toStyles(fn({ theme, [prop]: true }))).toEqual(trueValue != null ? { [cssProp]: trueValue } : {})
  expect(toStyles(fn({ theme, [prop]: false }))).toEqual(falseValue != null ? { [cssProp]: falseValue } : {})
  expect(toStyles(fn({ theme, [prop]: null }))).toEqual({})

  values.forEach((val) => {
    expect(toStyles(fn({ theme, [prop]: val }))).toEqual({ [cssProp]: val })
    expect(toStyles(fn({ theme, [prop]: val }))).toEqual({ [cssProp]: val })
    expect(toStyles(fn({ theme, [prop]: { M: val } }))).toEqual(wrapInMedia({ [cssProp]: val }))
  })
}
export {
  THEME as theme,
  toStyles,
  wrapInMedia,
  throwConsoleErrors,
  testValue
}
