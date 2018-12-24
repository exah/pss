import { isNum, isStr, curryN } from '@exah/utils'

export const px = (n) => isNum(n) && n !== 0 ? `${n}px` : n
export const percent = (n) => (n > 0 && n <= 1) ? `${n * 100}%` : n

export const wrap = curryN(2, (name, value) => value != null
  ? (name ? { [name]: value } : value)
  : null
)

export const wrapIfMedia = (query, style) => wrap(
  query ? `@media ${query}` : null,
  style
)

const parseUnit = (str) => str.replace(/([\d.]+)(\D+)?$/, '$2').trim()

export const splitUnit = (input) => isStr(input)
  ? [ parseFloat(input, 10), parseUnit(input) ]
  : [ input, '' ]

export const floor = (number, precision = 0) => {
  const factor = Math.pow(10, precision)
  return Math.floor(number * factor) / factor
}
