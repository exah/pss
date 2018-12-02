import { isFn, isStr, isObj, toArr, toObj, curryN } from '@exah/utils'

export const toUnit = curryN(2, (unit, n) => (n > 0 || n < 0) ? n + unit : n)
export const px = toUnit('px')
export const percentage = (n) => (n <= 0 || n > 1) ? n : `${n * 100}%`

export const toCssRule = (cssProps, toPx) => (val) => val != null
  ? toObj(cssProps, (name) => ({ [name]: toPx === true ? px(val) : val }))
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
    return toUnit(unit, Number(number) * coeficent)
  }

  return value * coeficent
}

export const skipPropValue = (...styles) => (input, ...rest) =>
  styles.map((s) => s(...rest))

export const keys = (obj) => isObj(obj) ? Object.keys(Object(obj)) : []

export const hasMediaKeys = (mediaKeys, val) =>
  toArr(val).some((key) => mediaKeys.includes(key))

export const combine = (...fns) => {
  const combined = (...args) => fns.map((fn) => fn(...args))
  const propTypes = fns.reduce((acc, fn) => ({
    ...acc,
    ...(fn && fn.propTypes)
  }), {})

  return Object.assign(combined, { propTypes })
}

export const floor = (number, precision = 0) => {
  const factor = Math.pow(10, precision)
  return Math.floor(number * factor) / factor
}
