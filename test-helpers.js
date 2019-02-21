/* eslint-env jest */

import { toArr, flatten, deepMerge } from '@exah/utils'
import renderer from 'react-test-renderer'

const THEME = {
  media: {
    D: '(min-width: 601px)',
    M: '(max-width: 600px)'
  }
}

const toJSON = (element) => renderer.create(element).toJSON()
const toStyles = (styles) => deepMerge(...flatten(toArr(styles)))
const wrapInMedia = (style) => ({ [`@media ${THEME.media.M}`]: style })

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
  toJSON,
  THEME as theme,
  toStyles,
  wrapInMedia,
  testValue
}
