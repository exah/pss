import { mergeDeepRight } from 'ramda'
import { toArr, flatten } from '@exah/utils'

const THEME = {
  media: {
    M: '(max-width: 600px)'
  },
  space: {
    default: [ 0, 8, 16, 32, 64 ]
  },
  size: {
    card: {
      default: 200,
      'M': 100
    }
  },
  palette: {
    default: {
      bg: '#ffffff',
      fg: '#000000'
    },
    inverted: {
      bg: '#000000',
      fg: '#ffffff'
    }
  }
}

const toStyles = (styles) => flatten(toArr(styles)).reduce(mergeDeepRight, {})
const mediaStyle = (style) => ({ [`@media ${THEME.media.M}`]: style })

const testAnyValue = ({
  fn,
  prop,
  cssProp,
  theme = THEME,
  values = []
}) => (t) => {
  t.deepEqual(toStyles(fn({ [prop]: true })), {})
  t.deepEqual(toStyles(fn({ [prop]: false })), {})
  t.deepEqual(toStyles(fn({ [prop]: null })), {})

  values.forEach((val) => {
    t.deepEqual(toStyles(fn({ [prop]: val })), { [cssProp]: val })
    t.deepEqual(toStyles(fn({ [prop]: val })), { [cssProp]: val })
    t.deepEqual(toStyles(fn({ theme, [prop]: { M: val } })), mediaStyle({ [cssProp]: val }))
    t.deepEqual(toStyles(fn({ theme, [prop + 'M']: val })), mediaStyle({ [cssProp]: val }))
  })
}

const testBoolValue = ({
  fn,
  prop,
  cssProp,
  theme = THEME,
  values = [],
  trueValue,
  falseValue
}) => (t) => {
  t.deepEqual(toStyles(fn({ [prop]: true })), { [cssProp]: trueValue })
  t.deepEqual(toStyles(fn({ [prop]: false })), { [cssProp]: falseValue })
  t.deepEqual(toStyles(fn({ [prop]: null })), {})

  values.forEach((val) => {
    t.deepEqual(toStyles(fn({ [prop]: val })), { [cssProp]: val })
    t.deepEqual(toStyles(fn({ [prop]: val })), { [cssProp]: val })
    t.deepEqual(toStyles(fn({ theme, [prop]: { M: val } })), mediaStyle({ [cssProp]: val }))
    t.deepEqual(toStyles(fn({ theme, [prop + 'M']: val })), mediaStyle({ [cssProp]: val }))
  })
}
export {
  THEME as theme,
  toStyles,
  mediaStyle,
  testAnyValue,
  testBoolValue
}
