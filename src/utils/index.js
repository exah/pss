import { isFn, isNum, isStr, toObj, curryN } from '@exah/utils'

export const toCssRule = (cssProps, toPx) => (val) => val != null
  ? toObj(cssProps, (name) => {
    const valWithUnit = toPx === true && (val > 0 || val < 0) ? `${val}px` : val
    return {
      [name]: valWithUnit
    }
  })
  : null

export const wrap = curryN(2, (name, style) => {
  const wrapper = (obj) => obj != null ? (name ? { [name]: obj } : obj) : null
  return isFn(style)
    ? (...args) => wrapper(style(...args))
    : wrapper(style)
})

export const handlePropStyle = (style, input, props, mediaKey, isRawValue) => isFn(style)
  ? style(input, props, mediaKey, isRawValue)
  : input === true ? style : null

export const wrapIfMedia = (query, style) => wrap(
  query ? `@media ${query}` : null,
  style
)

export const sizeValue = (input, trueVal = '100%', falseVal = 0) => (isNum(input)
  ? (input <= 0 || input > 1 ? input : `${input * 100}%`)
  : input === true ? trueVal : input === false ? falseVal : input
)

export const getNumber = (str) => parseFloat(str, 10)

export const getUnit = (str) => String(str)
  .replace(/([\d.]+)(\D+)?$/, '$2')
  .trim()

export const splitUnit = (str) => [ getNumber(str), getUnit(str) ]

export const spaceValue = (input, spaces = []) => {
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

export const skipPropValue = (...styles) => (input, ...rest) =>
  styles.map((s) => s(...rest))

export const keys = (obj) => Object.keys(Object(obj))

export const hasMediaKeys = (mediaKeys, value = {}) =>
  keys(value).some((key) => mediaKeys.includes(key))

export const combine = (...fns) => (...args) => fns.map((fn) => fn(...args))

export const floor = (number, precision = 0) => {
  const factor = Math.pow(10, precision)
  return Math.floor(number * factor) / factor
}
