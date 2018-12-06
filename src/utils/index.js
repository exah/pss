import { isFn, isNum, isObj, toArr, curryN } from '@exah/utils'

export const toUnit = curryN(2, (unit, n) => isNum(n) && n !== 0 ? n + unit : n)
export const px = toUnit('px')
export const percentage = (n) => (n <= 0 || n > 1) ? n : `${n * 100}%`

export const wrap = curryN(2, (name, value) => value != null
  ? (name ? { [name]: value } : value)
  : null
)

export const wrapIfMedia = (query, style) => wrap(
  query ? `@media ${query}` : null,
  style
)

export const handlePropStyle = (style, input, props, mediaKey) => isFn(style)
  ? style(input, props, mediaKey)
  : input === true ? style : null

export const getNumber = (str) => parseFloat(str, 10)

export const getUnit = (str) => String(str)
  .replace(/([\d.]+)(\D+)?$/, '$2')
  .trim()

export const splitUnit = (str) => [ getNumber(str), getUnit(str) ]

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
