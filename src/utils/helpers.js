import { isFn, isNum, isStr, toObj, curryN } from '@exah/utils'

const toCssRule = (cssProps, toPx) => (val) => val != null
  ? toObj(cssProps, (name) => {
    const valWithUnit = toPx === true && (val > 0 || val < 0) ? `${val}px` : val
    return {
      [name]: valWithUnit
    }
  })
  : null

const wrap = curryN(2, (name, style) => {
  const wrapper = (obj) => obj != null ? (name ? { [name]: obj } : obj) : null
  return isFn(style)
    ? (...args) => wrapper(style(...args))
    : wrapper(style)
})

const handlePropStyle = (style, input, props, mediaKey, isRawValue) => isFn(style)
  ? style(input, props, mediaKey, isRawValue)
  : input === true ? style : null

const wrapIfMedia = (query, style) => wrap(
  query ? `@media ${query}` : null,
  style
)

const sizeValue = (input, trueVal = '100%', falseVal = 0) => (isNum(input)
  ? (input <= 0 || input > 1 ? input : `${input * 100}%`)
  : input === true ? trueVal : input === false ? falseVal : input
)

const getNumber = (str) => parseFloat(str, 10)
const getUnit = (str) => String(str)
  .replace(/([\d.]+)(\D+)?$/, '$2')
  .trim()

const splitUnit = (str) => [ getNumber(str), getUnit(str) ]

const spaceValue = (input, spaces = []) => {
  const value = spaces[Math.abs(input)]
  const coeficent = ((input < 0) ? -1 : 1)

  if (value === undefined) {
    return null
  } else if (isStr(value)) {
    const [ number, unit ] = splitUnit(value)
    return `${Number(number) * coeficent}${unit}`
  }

  return value * coeficent
}

const skipPropValue = (...styles) => (input, ...rest) =>
  styles.map((s) => s(...rest))

const keys = (obj) => Object.keys(Object(obj))

const hasMediaKeys = (mediaKeys, value = {}) =>
  keys(value).some((key) => mediaKeys.includes(key))

export {
  keys,
  toCssRule,
  wrap,
  wrapIfMedia,
  handlePropStyle,
  sizeValue,
  spaceValue,
  skipPropValue,
  hasMediaKeys
}
