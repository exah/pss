import { mergeDeepRight } from 'ramda'
import { toArr, flatten } from '@exah/utils'

const THEME = {
  media: {
    D: '(min-width: 601px)',
    M: '(max-width: 600px)'
  }
}

const toStyles = (styles) => flatten(toArr(styles)).reduce(mergeDeepRight, {})
const wrapInMedia = (style) => ({ [`@media ${THEME.media.M}`]: style })

const testValue = ({
  fn,
  prop,
  cssProp,
  theme = THEME,
  values = [],
  trueValue,
  falseValue
}) => (t) => {
  t.deepEqual(toStyles(fn({ theme, [prop]: true })), trueValue != null ? { [cssProp]: trueValue } : {})
  t.deepEqual(toStyles(fn({ theme, [prop]: false })), falseValue != null ? { [cssProp]: falseValue } : {})
  t.deepEqual(toStyles(fn({ theme, [prop]: null })), {})

  values.forEach((val) => {
    t.deepEqual(toStyles(fn({ theme, [prop]: val })), { [cssProp]: val })
    t.deepEqual(toStyles(fn({ theme, [prop]: val })), { [cssProp]: val })
    t.deepEqual(toStyles(fn({ theme, [prop]: { M: val } })), wrapInMedia({ [cssProp]: val }))
    t.deepEqual(toStyles(fn({ theme, [prop + 'M']: val })), wrapInMedia({ [cssProp]: val }))
  })
}
export {
  THEME as theme,
  toStyles,
  wrapInMedia,
  testValue
}
